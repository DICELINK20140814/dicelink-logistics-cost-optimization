import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "物流コスト削減診断 | コスト改善余地を可視化",
  description:
    "物流コストの改善余地を3分で可視化。年間数千万円〜数億円の削減余地を確認。",
  openGraph: {
    title: "物流コスト削減診断",
    description:
      "物流コストの改善余地を可視化。数千万円〜数億円の削減余地を3分で確認。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
