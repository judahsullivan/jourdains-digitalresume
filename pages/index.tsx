import MainPage from '@/containers/main'
import Experience from '@/containers/experience'
import Contact from '@/containers/contact'
import Abouts from '@/containers/about'
import { companies } from '@/utils/data'
import { Divider } from '@chakra-ui/react'

export default function Home() {
  return (
<>
<MainPage />
<Divider mb={5} />
<Abouts/>
<Divider m={5} />
<Experience companies={companies} />
<Divider mt={5}/>
<Contact />
</>
) }
