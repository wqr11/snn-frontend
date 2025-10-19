import { Divider, Icon } from "@/components";
import { Accordion } from "@/components/accordion";
import { OpacityText } from "@/components/opacity-text";
import { SearchField } from "@/components/search-field";
import { StyledText } from "@/components/styled-text";
import { IPost, Post } from "@/entities/post";
import { IUser } from "@/entities/user";
import { AuthRedirect } from "@/features/auth-redirect";
import { STORAGE_BASE_URL } from "@/shared/config";
import { Image } from "expo-image";
import { ScrollView, View } from "react-native";
import { styled } from "styled-components/native";
import { ContactList } from "./styled";

export const ProfilePageUI = ({
  user,
  posts,
}: {
  user: IUser | null;
  posts: IPost[];
}) => {
  return (
    <ScrollView>
      <AuthRedirect />
      <ColorBlock />

      <View
        style={{
          paddingTop: 57,
        }}
      >
        <View
          style={{
            alignItems: "center",
            gap: 15,
            marginBottom: 36,
            overflow: "hidden",
          }}
        >
          <Image
            source={`${STORAGE_BASE_URL}/${user?.avatar_url}`}
            alt="Person"
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />

          <View style={{ alignItems: "center" }}>
            <StyledText style={{ fontSize: 22 }}>{user?.name}</StyledText>

            <OpacityText>{user?.main_tag}</OpacityText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 25,
          }}
        >
          {/* {user..map((item, i) => (
            <Fragment key={item.title}>
              <StatItem {...item} />
              {i !== data.length - 1 && (
                <Divider
                  isVertical
                  style={{ height: 40 }}
                  margin={{
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                  }}
                />
              )}
            </Fragment>
          ))} */}
        </View>
        <Divider
          margin={{
            top: 37,
            bottom: 24,
          }}
        />
        <Container style={{ gap: 24, marginBottom: 16 }}>
          <StyledText style={{ fontSize: 18, fontWeight: 700 }}>
            Обо мне
          </StyledText>

          <OpacityText style={{ fontSize: 16 }}>
            {user?.description ?? "-"}
          </OpacityText>
        </Container>

        <Container
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            overflow: "hidden",

            alignItems: "center",
            marginBottom: 37,
          }}
        >
          <StyledText style={{ marginRight: 5, fontSize: 16 }}>
            Компетенции:
          </StyledText>
          <PrimaryStyledText>{user?.main_tag}</PrimaryStyledText>
          {(!!user &&
            user?.additional_tags?.map((item) => (
              <PrimaryStyledText key={item}>{item}</PrimaryStyledText>
            ))) ??
            "-"}
        </Container>
        <Accordion
          items={[
            {
              id: "Contact Info",
              content: (
                <ContactList
                  contacts={[
                    {
                      type: "email",
                      value: user?.email ?? "",
                    },
                  ]}
                />
              ),
              header: (isOpen) => (
                <BorderContainer
                  marginBottom={isOpen ? 10 : 0}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                  }}
                >
                  <StyledText style={{ fontSize: 16, fontWeight: "700" }}>
                    Контактная информация
                  </StyledText>

                  <Icon name={isOpen ? "chevron-up" : "chevron-down"} />
                </BorderContainer>
              ),
            },
          ]}
        />
        <Container style={{ marginVertical: 32 }}>
          <SearchField placeholder="Введите название поста" />
        </Container>
        <BorderContainer marginBottom={0}>
          {/* <PostShortcut /> */}
        </BorderContainer>
        {posts.map(({ id, content, owner, attachments }) => (
          <Post
            key={id}
            $username={
              !!owner ? owner?.name ?? owner?.company_name : user?.name
            }
            $desc={content}
            $avatar={(!!owner ? owner?.avatar_url : user?.avatar_url) ?? ""}
            $role={!!owner ? owner?.main_tag : user?.main_tag}
            $attachments={attachments}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const ColorBlock = styled.View`
  background-color: ${({ theme }) => theme.accent.primary};
  width: 100%;
  height: 150px;
  border-radius: 0 0 30px 30px;
  position: absolute;
`;

const Container = styled.View`
  padding: 0 16px;
`;

const PrimaryStyledText = styled(StyledText)`
  color: ${({ theme }) => theme.accent.primary};
  margin-right: 3px;
  font-size: 16px;
`;

const BorderContainer = styled.View<{ marginBottom: number }>`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.grayScale.gray2};
  border-bottom-width: 1px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;
