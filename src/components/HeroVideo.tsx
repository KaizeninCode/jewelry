
const HeroVideo = () => {
  return (
    <video 
        src="/hero.mp4"
        autoPlay
        // height={'screen'}
        // width={'100%'}
        loop
        muted
        className="size-[85%] mx-auto mt-8"
    />
  )
}

export default HeroVideo