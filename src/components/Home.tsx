import { Box, Menu, MenuItem, MenuButton, MenuList, Link } from "@chakra-ui/react"
import { LuMenuSquare } from "react-icons/lu";
import HeroVideo from "./HeroVideo";

const Home = () => {
    const navLinks = [
        {
            name: 'Our Story',
            url: '/our-story'
        },
        {
            name: 'Get In Touch',
            url: '/contact'
        }        
    ]
  return (
    <div className="w-full">
      <section className="w-screen h-1/5 grid place-content-center  text-white">
          <Box className="flex w-screen lg:px-16 px-4 py-2 lg:justify-between items-center lg:gap-8 text-amber-800">
              <a href={'/'} className="lg:text-4xl md:text-3xl md:mr-auto text-xl font-extrabold">Some Name</a>
              <div className="max-md:hidden flex justify-between gap-6 p-1">
                  {navLinks.map((link, index) => (
                      <a href={link.url} key={index} className="rounded-lg p-1 w-[100px] grid place-items-center transition ease-in-out duration-500 hover:text-slate-300">{link.name}</a>
                  ))}
              </div>
              {/* <button className="max-md:hidden p-2 hover:bg-white rounded-lg transition ease-in-out duration-1000 hover:text-amber-800">Check out what we have</button>  */}
              <div className="md:hidden max-md:ml-auto">
                  <Menu isLazy>
                      <MenuButton className="text-xl">
                          <LuMenuSquare/>
                      </MenuButton>
                      <MenuList>
                          {navLinks.map((l, index)=>(
                              <MenuItem key={index} as={Link} href={l.url}>{l.name}</MenuItem>
                          ))}
                      </MenuList>
                  </Menu>
              </div>
              <div className="w-1/2">
              </div>
          </Box>
          <hr className="border-amber-700"/>
      </section>
      <section className="lg:flex">
        <div className="w-1/2">
          <HeroVideo/>
        </div>
        <div className="w-1/2 p-8 items-center justify-center my-auto lg:text-xl">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, eos delectus, nobis possimus minus id quos inventore voluptatibus amet nulla similique dicta harum veritatis temporibus alias doloremque. Iure unde eius debitis eaque eveniet tempore quibusdam quia? Repudiandae eligendi consequatur tempore corrupti facilis porro necessitatibus nobis!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, eos delectus, nobis possimus minus id quos inventore voluptatibus amet nulla similique dicta harum veritatis temporibus alias doloremque. Iure unde eius debitis eaque eveniet tempore quibusdam quia? Repudiandae eligendi consequatur tempore corrupti facilis porro necessitatibus nobis!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, eos delectus, nobis possimus minus id quos inventore voluptatibus amet nulla similique dicta harum veritatis temporibus alias doloremque. Iure unde eius debitis eaque eveniet tempore quibusdam quia? Repudiandae eligendi consequatur tempore corrupti facilis porro necessitatibus nobis!</p>
        </div>
      </section>
    </div>
  )
}

export default Home