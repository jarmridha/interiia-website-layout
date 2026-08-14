export function Belief() {
  return (
    <section className="relative min-h-[633px] overflow-hidden bg-black text-white">
      <img src="/images/belief.png" alt="Warm interior with natural light" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 flex min-h-[633px] flex-col px-6 py-7 md:px-12 md:py-8">
        <h2 className="text-[38px] leading-none tracking-[-.04em] md:text-[40px]">Our belief</h2>
        <div className="mx-auto mt-auto mb-auto w-full max-w-[360px] pt-24 md:pt-10">
          <p className="text-[18px] font-semibold leading-[1.18] tracking-[-.025em]">
            A beautiful space doesn&apos;t happen by accident. It happens through listening, understanding, and making hundreds of intentional choices - each one quietly working together until the space finally feels right.
          </p>
          <div className="mt-5 border-t border-white/40 pt-5 text-[13px] font-semibold">Studio founder</div>
        </div>
        <h2 className="self-end text-[38px] leading-none tracking-[-.04em] md:text-[40px]">By design</h2>
      </div>
    </section>
  )
}
