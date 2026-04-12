import Image from "next/image";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const URL = "https://logistics-diagnostic-dice-link-co-j.vercel.app/";

const accent =
  "inline-flex w-full max-w-xl items-center justify-center rounded border border-[#0F2744] bg-[#0F2744] px-8 py-4 text-center text-[15px] font-medium tracking-wide text-white transition hover:bg-[#1a3558] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2744] md:text-base";

function CTA() {
  return (
    <a
      href={URL}
      target="_blank"
      rel="noopener noreferrer"
      className={accent}
    >
      現状のまま、いくら損失が出ているか確認する
    </a>
  );
}

function Section({
  children,
  variant = "default",
  photoSrc,
}: {
  children: React.ReactNode;
  variant?: "default" | "muted";
  /** public/ 配下のパス（例: /bg-01.jpg）。未指定なら従来どおり単色背景。 */
  photoSrc?: string;
}) {
  const hasPhoto = Boolean(photoSrc);

  return (
    <section
      className={`relative overflow-hidden border-b border-[#E8DFD0] last:border-b-0 ${
        hasPhoto ? "" : variant === "muted" ? "bg-[#FAF7F2]" : "bg-[#FFFFFF]"
      }`}
    >
      {hasPhoto && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={photoSrc!}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={photoSrc === "/bg-01.jpg"}
            />
          </div>
          <div
            className={`absolute inset-0 z-[1] ${
              variant === "muted" ? "bg-[#FAF7F2]/82" : "bg-[#FFFFFF]/80"
            }`}
            aria-hidden
          />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 md:py-28">
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div
      className={`${notoSansJp.className} min-h-screen bg-[#FFFFFF] pb-28 text-[#0F2744] antialiased`}
    >
      <main>
        <Section photoSrc="/bg-01.jpg">
          <div className="mb-12">
            <Image
              src="/logo.png"
              alt="DICE LINK"
              width={200}
              height={48}
              className="h-9 w-auto md:h-10"
              priority
            />
            <div
              className="mt-6 h-px w-14 bg-[#C4A574]"
              aria-hidden
            />
          </div>
          <p className="text-lg font-medium leading-[1.75] tracking-tight md:text-xl">
            配送ルートを毎日見直しているのに、
            <br />
            それが最適だと説明できますか。
          </p>
          <p className="mt-10 text-lg font-medium leading-[1.75] tracking-tight md:text-xl">
            説明できない限り、
            <br />
            コストは既に漏れています。
          </p>
          <div className="mt-14">
            <CTA />
          </div>
        </Section>

        <Section variant="muted" photoSrc="/bg-02.jpg">
          <p className="text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            配送ルートは最適化されていると思われている。
            <br />
            しかし、それを証明できる企業は存在しない。
          </p>
        </Section>

        <Section photoSrc="/bg-03.jpg">
          <p className="text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            配送ルート、積載、人員、拠点は連動している。
            <br />
            個別に調整している限り、トレードオフが未処理のまま残る。
          </p>
          <p className="mt-12 text-lg font-medium leading-[1.85] text-[#0F2744] md:text-xl">
            その結果、
          </p>
          <div className="mt-8 space-y-3 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            <p>不要な走行距離が発生する</p>
            <p>人件費が過剰に発生する</p>
            <p>積載効率が低下する</p>
            <p>車両台数が増加する</p>
          </div>
          <p className="mt-12 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            毎月、構造的にコストが漏れ続けている。
          </p>
        </Section>

        <Section variant="muted" photoSrc="/bg-04.jpg">
          <p className="text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            売上50億〜500億規模の物流企業において、
          </p>
          <p className="mt-10 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            年間数千万円〜数億円単位のコストが、
            <br />
            既に漏れている可能性が高い。
          </p>
          <p className="mt-10 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            これは改善余地ではなく、
            <br />
            既に発生している損失である。
          </p>
          <p className="mt-10 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            この状態を1年継続した場合、
            <br />
            同額の損失が追加で固定される。
          </p>
          <div className="mt-14">
            <CTA />
          </div>
        </Section>

        <Section photoSrc="/bg-05.jpg">
          <p className="text-lg font-medium leading-[1.85] text-[#0F2744] md:text-xl">
            現状の運用では、
          </p>
          <div className="mt-8 space-y-3 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            <p>どこが無駄か分からない</p>
            <p>どこまで削減できるか分からない</p>
            <p>投資判断ができない</p>
          </div>
          <p className="mt-12 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            最適でない状態を最適と誤認し続ける。
          </p>
          <p className="mt-10 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            数理による最適化が行われた場合、
            <br />
            この差分は不可逆に拡大する。
          </p>
        </Section>

        <Section variant="muted" photoSrc="/bg-06.jpg">
          <p className="text-lg font-medium leading-[1.85] text-[#0F2744] md:text-xl">
            配送ルートを起点に
          </p>
          <div className="mt-8 space-y-3 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            <p>構造を分解する</p>
            <p>複数変数を同時に扱う</p>
            <p>トレードオフを処理する</p>
            <p>全体最適を導出する</p>
          </div>
          <p className="mt-10 text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            最適状態を数値で提示する。
          </p>
        </Section>

        <Section photoSrc="/bg-07.jpg">
          <p className="text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            どこを動かせばどれだけコストが変わるかが明確になる。
            <br />
            最適状態が数値で提示される。
            <br />
            意思決定が成立する。
          </p>
          <div className="mt-14">
            <CTA />
          </div>
        </Section>

        <Section variant="muted" photoSrc="/bg-08.jpg">
          <p className="text-lg leading-[1.85] text-[#2C3544] md:text-xl">
            算出は、同一条件（物量・拠点・制約）で比較しているため、
            <br />
            現状との乖離ではなく、純粋な構造差分である。
          </p>
        </Section>

        <Section photoSrc="/bg-09.jpg">
          <div className="flex justify-center">
            <CTA />
          </div>
        </Section>
      </main>

      <footer className="border-t border-[#E8DFD0] bg-[#FFFFFF] px-6 py-10 text-center text-sm text-[#2C3544]">
        ©DICE LINK, Inc.
      </footer>

      <div className="fixed bottom-0 left-0 right-0 border-t border-[#E8DFD0] bg-[#FFFCF8]/95 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl justify-center">
          <CTA />
        </div>
      </div>
    </div>
  );
}
