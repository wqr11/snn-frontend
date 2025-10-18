import { useState } from "react";

export interface Tag {
  id: string;
  text: string;
}

export const useTags = (initialTags: Tag[] = []) => {
  const [tags, setTags] = useState<Tag[]>(initialTags);

  const addTag = (text: string) => {
    const trimmedText = text.trim();
    if (trimmedText && !tags.some((tag) => tag.text === trimmedText)) {
      const newTag: Tag = {
        id: Date.now().toString(),
        text: trimmedText,
      };
      setTags((prev) => [...prev, newTag]);
      return true;
    }
    return false;
  };

  const removeTag = (tagId: string) => {
    setTags((prev) => prev.filter((tag) => tag.id !== tagId));
  };

  const clearTags = () => {
    setTags([]);
  };

  const updateTag = (tagId: string, newText: string) => {
    setTags((prev) =>
      prev.map((tag) =>
        tag.id === tagId ? { ...tag, text: newText.trim() } : tag
      )
    );
  };

  return {
    tags,
    addTag,
    removeTag,
    clearTags,
    updateTag,
    setTags,
  };
};
