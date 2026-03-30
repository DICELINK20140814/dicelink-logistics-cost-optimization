"use client";

const URL = "https://logistics-diagnostic-dice-link-co-j.vercel.app/";

function CTA() {
  return (
    <a
      href={URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-lg bg-[#CEC1A1] px-6 py-4 text-center font-semibold text-[#0A2643] shadow-lg hover:opacity-95 transition"
    >
      コスト改善余地を確認する（3分・無料）
      <div className="text-xs mt-1 opacity-70">
        年間数千万円〜数億円の削減余地がある可能性があります。
      </div>
    </a>
  );
}

function Section({ children, gray = false }: any) {
  return (
    <section className={gray ? "bg-[#F7F8FA]" : ""}>
      <div className="max-w-4xl mx-auto px-6 py-20">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main>

      {/* HERO */}
      <Section>
        <img src="/logo.png" className="h-8 mb-10" />

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A2643] leading-tight">
          物流コストは
          <br />
          改善余地があります
        </h1>

        <p className="mt-6 text-2xl font-semibold text-[#0A2643]">
          年間数千万円〜数億円
        </p>

        <p className="text-xl mt-2">
          コスト改善余地がある可能性があります。
        </p>

        <p className="mt-8 text-lg leading-relaxed">
          原油高は止められません<br />
          しかし見直せるコストは抑えられます。
        </p>

        <div className="mt-10">
          <CTA />
        </div>
      </Section>

      {/* 現実 */}
      <Section gray>
        <p className="text-lg md:text-xl leading-relaxed">
          原油価格の上昇により<br />
          物流コストは確実に上がっています。
        </p>
      </Section>

      {/* 差 */}
      <Section>
        <p className="text-lg md:text-xl leading-relaxed">
          同じ業界・同じ規模でも<br />
          コストに大きな差が出ています。
        </p>
      </Section>

      {/* 原因 */}
      <Section gray>
        <p className="text-lg md:text-xl font-semibold text-[#0A2643] leading-relaxed">
          その差は<br />
          物流の構造で決まります。
        </p>
      </Section>

      {/* 自分ごと */}
      <Section>
        <p className="text-lg md:text-xl leading-relaxed">
          あなたの会社にも<br />
          削減余地が残っている可能性があります。
        </p>
      </Section>

      {/* 構造 */}
      <Section gray>
        <p className="text-lg md:text-xl leading-relaxed">
          物流コストは単一要因では決まりません。
        </p>

        <div className="mt-8 space-y-3 text-lg">
          <div>・拠点配置</div>
          <div>・配送設計</div>
          <div>・積載効率</div>
          <div>・出荷のばらつき</div>
        </div>
      </Section>

      {/* 具体 */}
      <Section>
        <p className="text-lg md:text-xl leading-relaxed">
          拠点配置が最適でないだけで<br />
          年間1億円以上の差が出るケースがあります。
        </p>
      </Section>

      {/* 時間圧 */}
      <Section gray>
        <p className="text-lg md:text-xl leading-relaxed">
          この差は<br />
          毎月積み上がっています。
        </p>
      </Section>

      {/* 診断 */}
      <Section>
        <p className="text-lg md:text-xl leading-relaxed">
          ・3分で完了<br />
          ・その場で結果表示<br />
          ・準備不要
        </p>

        <div className="mt-10">
          <CTA />
        </div>
      </Section>

      {/* 信頼 */}
      <Section gray>
        <p className="text-lg md:text-xl leading-relaxed">
          すでに大手企業では<br />
          物流の構造最適化が進んでいます。
        </p>
      </Section>

      {/* クロージング */}
      <Section>
        <p className="text-lg md:text-xl leading-relaxed">
          判断するためには<br />
          まず現状の把握が必要です。
        </p>

        <div className="mt-10">
          <CTA />
        </div>
      </Section>

      {/* フッター */}
      <footer className="text-center text-sm text-gray-500 py-10">
        ©DICE LINK, INC.
      </footer>

      {/* 追従CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4">
        <CTA />
      </div>

    </main>
  );
}
