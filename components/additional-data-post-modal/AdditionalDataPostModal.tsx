import { postShortcutModel } from "@/features/post-shortcut";
import { useForm } from "effector-forms";
import { Modal, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components/native";
import { Field } from "../field";
import { Heading } from "../heading";
import { Icon } from "../icon";
import { OpacityText } from "../opacity-text";
import { TagInput } from "../tag-field/tag-field";
import { useTags } from "../tag-field/use-tag";

export const AdditionalDataPostModal = () => {
  const form = useForm(postShortcutModel.$form);

  const { tags, addTag, removeTag, clearTags, setTags } = useTags([]);

  const handleTagsChange = (newTags: any[]) => {
    setTags(newTags);
  };

  return (
    <Modal>
      <View
        style={{
          padding: 20,
        }}
      >
        <Header>
          <TouchableOpacity>
            <Icon name={"arrow-left"} />
          </TouchableOpacity>

          <TouchableOpacity>
            <OpacityText>Отправить</OpacityText>
          </TouchableOpacity>
        </Header>

        <View>
          <Heading title="Создать пост" marginBottom={27} />

          <View
            style={{
              gap: 16,
            }}
          >
            <Field
              placeholder="Текст поста"
              multiline
              style={{ minHeight: 280 }}
              value={form.fields.content.value}
              onChangeText={form.fields.content.onChange}
            />

            <TagInput
              tags={tags}
              onChangeTags={handleTagsChange}
              placeholder="Компетенции"
              maxTags={5}
            />

            {/* <MediaList /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;
