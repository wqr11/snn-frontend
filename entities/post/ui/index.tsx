import { STORAGE_BASE_URL } from "@/shared/config";
import { Linking, StyleSheet } from "react-native";
import * as S from "./styled";

const styles = StyleSheet.create({
  post: {
    borderBottomWidth: 1,
  },
  imageAttachment: {
    width: "100%",
    borderRadius: 12,
    marginTop: 8,
  },
  fileLink: {
    marginTop: 8,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export interface PostProps {
  $avatar?: string;
  $username?: string;
  $role?: string;
  $desc?: string;
  $attachments?: Array<{
    id: string;
    file_url: string;
    type?: string;
  }>;
}

export const Post: React.FC<PostProps> = ({
  $avatar,
  $desc,
  $role,
  $username,
  $attachments = [],
}) => {
  const isImageAttachment = (fileUrl: string) => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
    return imageExtensions.some((ext) => fileUrl.toLowerCase().includes(ext));
  };

  const getFileName = (fileUrl: string) => {
    return fileUrl.split("/").pop() || "File";
  };

  const getFullUrl = (filePath: string) => {
    if (!filePath) return "";

    if (filePath.startsWith("http")) {
      return filePath;
    }

    const cleanPath = filePath.startsWith("/") ? filePath.slice(1) : filePath;
    return `${STORAGE_BASE_URL}/${cleanPath}`;
  };

  const handleFilePress = async (fileUrl: string) => {
    const url = getFullUrl(fileUrl);

    try {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

  return (
    <S.PostWrapper>
      <S.PostStyled style={styles.post}>
        <S.PostHeader>
          <S.PostAvatar source={{ uri: $avatar }} />
          <S.PostHeaderTexts>
            <S.PostHeaderUsername>{$username}</S.PostHeaderUsername>
            <S.PostHeaderUserRole>{$role}</S.PostHeaderUserRole>
          </S.PostHeaderTexts>
        </S.PostHeader>

        <S.PostDescription>{$desc}</S.PostDescription>

        {/* Attachments */}
        {$attachments.length > 0 && (
          <S.AttachmentsContainer>
            {$attachments.map((attachment) => {
              const fullUrl = getFullUrl(attachment.file_url);

              if (isImageAttachment(attachment.file_url)) {
                return (
                  <S.ImageAttachmentWrapper
                    key={attachment.id}
                    onPress={() => handleFilePress(attachment.file_url)}
                  >
                    <S.ImageAttachment
                      source={{ uri: fullUrl }}
                      style={styles.imageAttachment}
                      contentFit="cover"
                    />
                  </S.ImageAttachmentWrapper>
                );
              } else {
                return (
                  <S.FileLinkWrapper
                    key={attachment.id}
                    onPress={() => handleFilePress(attachment.file_url)}
                    style={styles.fileLink}
                  >
                    <S.FileLinkText>
                      📎 {getFileName(attachment.file_url)}
                    </S.FileLinkText>
                  </S.FileLinkWrapper>
                );
              }
            })}
          </S.AttachmentsContainer>
        )}
      </S.PostStyled>
    </S.PostWrapper>
  );
};
