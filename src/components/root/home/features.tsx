const Features = () => {
  return (
    <div className='min-h-screen flex justify-around items-center flex-wrap px-[3rem] md:px-0'>
      <div>
        <img src={"/image (2).svg"} width={500} height={500} className='' alt='features' />
      </div>
      <div className='flex justify-start flex-col items-start max-w-xl'>
        <h1 className='text-2xl mb-4 md:text-5xl font-medium text-dark-5'>
        Revolutionize Your Contract Management with Our Powerful AI Features
        </h1>
        <h1 className='font-medium text-sm mb-6'>
          Our resume designer application uses advanced algorithms to extract relevant information Experience seamless contract management with Xcontour's AI-driven automated compliance testing and smart automations. Streamline your workflow and ensure accuracy, allowing you to focus on what truly matters—growing your freelance business.
        </h1>
        <section className='flex justify-around items-center'>
          <main className='flex flex-col justify-start gap-y-4 items-start'>
            <h1 className='text-xl font-medium' >
            Automated Compliance
            </h1>
            <h1 className='font-medium text-sm mb-6'>
            Ensure your contracts meet regulations without the hassle of manual checks.
            </h1>
          </main>
          <main className='flex flex-col justify-start gap-y-4 items-start'>
            <h1 className='text-xl font-medium'>
            Custom Templates
            </h1>
            <h1 className='font-medium text-sm mb-6'>
            Easily create and manage contracts that suit your unique business needs.
            </h1>
          </main>
        </section>
      </div>
    </div>
  )
}

export default Features