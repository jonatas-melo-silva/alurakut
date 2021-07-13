import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUserImage}.png`}
        alt="Foto Perfil"
      />
    </Box>
  )
}

export default function Home() {
  const githubUserImage = 'jonatas-melo-silva'
  const favoritePersons = [
    'juunegreiros',
    'mariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUserImage={githubUserImage} />
        </div>
        <div className="welcomeAre" style={{ gridArea: 'welcomeAre' }}>
          <Box>
            <h1 className="title">
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div
          className="ProfileRelationsAre"
          style={{ gridArea: 'ProfileRelationsAre' }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritePersons.length})
            </h2>

            <ul>
              {favoritePersons.map(person => {
                return (
                  <li>
                    <a href={`/users/${person}`} key={person}>
                      <img
                        src={`http://github.com/${person}.png`}
                        alt="Foto Perfil"
                      />
                      <span>{person}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
