import { useForm } from "effector-forms";
import * as DocumentPicker from "expo-document-picker";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { $form } from "./model";
import * as S from "./styled";

interface UploadFile {
  uri: string;
  name: string;
  type: string;
  file: File;
}

const styles = StyleSheet.create({
  post: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export const PostShortcut = () => {
  const form = useForm($form);
  const [attachedFiles, setAttachedFiles] = useState<UploadFile[]>([]);

  useEffect(() => {}, [form]);

  const uriToFile = async (
    uri: string,
    fileName: string,
    mimeType: string
  ): Promise<File> => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      return new File([blob], fileName, { type: mimeType });
    } catch (error) {
      console.error("Error converting URI to File:", error);
      throw error;
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        multiple: false,
        type: "*/*",
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        const file = await uriToFile(
          asset.uri,
          asset.name || `file_${Date.now()}`,
          asset.mimeType || "application/octet-stream"
        );

        const newFile: UploadFile = {
          uri: asset.uri,
          name: asset.name || "Unknown file",
          type: asset.mimeType || "application/octet-stream",
          file: file,
        };

        const updatedFiles = [...attachedFiles, newFile];
        setAttachedFiles(updatedFiles);

        const fileObjects = updatedFiles.map((f) => f.file);
        form.fields.file.onChange(fileObjects[0] as File);
      } else {
      }
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = attachedFiles.filter((_, i) => i !== index);
    setAttachedFiles(updatedFiles);

    const fileObjects = updatedFiles.map((f) => f.file);
    form.fields.file.onChange(fileObjects);
  };

  const handleSubmit = () => {
    form.submit();
    setAttachedFiles([]);
  };

  return (
    <S.PostShortcutStyled style={styles.post}>
      <S.PostShortcutMain>
        <S.PostShortcutAttachmentButton onPress={pickDocument} />
        <S.PostShortcutField
          placeholder="Как прошёл ваш день?"
          onChangeText={form.fields.content.onChange}
          value={form.fields.content.value}
        />
      </S.PostShortcutMain>

      {attachedFiles.length > 0 && (
        <S.AttachedFilesContainer>
          {attachedFiles.map((file, index) => (
            <S.FilePreview key={index}>
              <S.FileName>{file.name}</S.FileName>
              <S.RemoveFileButton onPress={() => removeFile(index)}>
                <S.RemoveIcon>×</S.RemoveIcon>
              </S.RemoveFileButton>
            </S.FilePreview>
          ))}
        </S.AttachedFilesContainer>
      )}

      <S.PostShortcutBottom>
        <S.PostShortcutSendButton onPress={handleSubmit}>
          Отправить
        </S.PostShortcutSendButton>
      </S.PostShortcutBottom>
    </S.PostShortcutStyled>
  );
};

export * as postShortcutModel from "./model";
