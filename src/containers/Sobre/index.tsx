import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Githubsecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit praesentium
      suscipit non ad hic quibusdam alias saepe harum sed! Vero minima
      laudantium, maxime dolor rerum a tempora explicabo eum animi!
    </Paragrafo>
    <Githubsecao>
      <img src="https://github-readme-stats.vercel.app/api?username=spectrie&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=spectrie&layout=compact&langs_count=7&theme=dracula" />
    </Githubsecao>
  </section>
)

export default Sobre
