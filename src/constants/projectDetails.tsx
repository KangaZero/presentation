export interface projectDetailsProps {
  title: string;
  description: string;
  url: string;
}

const projectDetails: projectDetailsProps[] = [
  {
    title: "ホームページ",
    description:
      "最初にユーザーがサイトにアクセスすると、このような画面が表示されます。",
    url: "/home-page.png",
  },
  {
    title: "登録ページ",
    description:
      "ユーザーはアカウントにサインアップして、現在および過去の予約を表示し、住所、電話番号、プロフィール画像などの個人情報を追加および更新することができます。",
    url: "/signup-page.png",
  },
  {
    title: "ユーザーのロフィール",
    description:
      "ユーザーは、現在および過去の予約を表示し、住所、メール、プロフィール画像などの個人情報を追加および更新することができます。",
    url: "/user-profile-page.png",
  },
  {
    title: "ペットシッター検索結果",
    description:
      "ここでは、ユーザーは場所、料金、および名前のアルファベット順に基づいてペットシッターを検索することができます。",
    url: "/nanny-list.png",
  },
  {
    title: "ペットシッタープのロフィール",
    description:
      "ここでは、ユーザーはペットシッターの詳細を確認し、ペットシッターを予約することができます。",
    url: "/nanny-profile.png",
  },
  {
    title: "予約ページ",
    description:
      "ユーザーは、特定の日付にペットシッターを予約することができ、さらに任意の追加情報を記入することもできます。",
    url: "/booking-page.png",
  },
  {
    title: "お支払いページ",
    description:
      "Stripeを使用することで、ユーザーは簡単かつ安全に予約の支払いを行うことができます。",
    url: "/payment-page.png",
  },
];

export default projectDetails;
