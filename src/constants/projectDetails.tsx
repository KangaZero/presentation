
export interface projectDetailsProps {
  title: string;
  description: string;
  url: string;
}

const projectDetails: projectDetailsProps[] = [
  {
    title: "ホームページ",
    description: "This is what the user sees when they first visit the site",
    url: '/home-page.png',
  },
  {
    title: "ペットシッター検索結果",
    description: "Here users are able to search for petsitters based on their location, prize, and name in alphabetical order",
    url: '/nanny-list.png',
  },
  {
    title: "ペットシッタープのロフィール",
    description: "ホームページの説明",
    url: "nanny-profile.png",
  },
  {
    title: "予約ページ",
    description: "Users are able to book a petsitter for a specific date as well as any additional notes they may have",
    url: "booking-page.png",
  },
  {
    title: "お支払いページ",
    description: "Using stripe, users are able to pay for their booking easily and securely",
    url: "payment-page.png",
  },
  {
    title: "登録ページ",
    description: "Users may sign up for an account to view their current and past bookings, as well as add and update their personal details such as their address, phone number, and profile picture",
    url: "signup-page.png",
  },
];

export default projectDetails;
