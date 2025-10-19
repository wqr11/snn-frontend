import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { styled } from "styled-components/native";
import { Typography } from "../typography/styled";

interface AvatarFileStyledProps {
  $hasError?: boolean;
}

export interface AvatarFileProps {
  error?: string;
  onFileSelect?: (file: File | null) => void;
  placeholder?: string;
}

const AvatarFileWrapper = styled(View)`
  gap: 8px;
`;

const AvatarContainer = styled(View)<AvatarFileStyledProps>`
  padding: 18px;
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? "#FF3B30" : theme.grayScale.gray2)};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
  min-height: 120px;
`;

const AvatarButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const AvatarPlaceholder = styled(Typography)`
  color: ${({ theme }) => theme.grayScale.gray1};
  text-align: center;
`;

const AvatarImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  resize-mode: cover;
`;

const RemoveButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${({ theme }) => theme.grayScale.gray3};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const RemoveIcon = styled(Typography)`
  color: ${({ theme }) => theme.background};
  font-size: 16px;
  line-height: 16px;
`;

const ErrorText = styled(Typography)`
  padding-left: 4px;
`;

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

export const AvatarFile: React.FC<AvatarFileProps> = ({
  error,
  onFileSelect,
  placeholder = "Выберите аватар",
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const pickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Ошибка", "Необходимо разрешение для доступа к галерее");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];

        const file = await uriToFile(
          asset.uri,
          `avatar_${Date.now()}.jpg`,
          asset.mimeType || "image/jpeg"
        );

        setSelectedImage(asset.uri);
        setSelectedFile(file);
        onFileSelect?.(file);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Ошибка", "Не удалось выбрать изображение");
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setSelectedFile(null);
    onFileSelect?.(null);
  };

  return (
    <AvatarFileWrapper>
      <AvatarContainer $hasError={!!error}>
        <AvatarButton onPress={pickImage}>
          {selectedImage ? (
            <View>
              <AvatarImage source={{ uri: selectedImage }} />
              <RemoveButton onPress={removeImage}>
                <RemoveIcon $variant="semibold">×</RemoveIcon>
              </RemoveButton>
            </View>
          ) : (
            <AvatarPlaceholder $variant="regular">
              {placeholder}
            </AvatarPlaceholder>
          )}
        </AvatarButton>
      </AvatarContainer>

      {error && (
        <ErrorText $variant="thin" $color="#FF3B30">
          {error}
        </ErrorText>
      )}
    </AvatarFileWrapper>
  );
};
