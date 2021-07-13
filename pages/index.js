import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt="Foto Perfil"
      />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'jonatas-melo-silva'
  const followers = ['davidallysson', 'Paulo-Costa', 'Breno-Silva1', 'mergirl', 'AdlemDutra', 'Kristian-Roopnarine']
  const favoritePersons = [
    'juunegreiros',
    'omariosouto',
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
          <ProfileSideBar githubUser={githubUser} />
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
          {/* Comunidade */}
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
          {/* seguidores */}
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Meus Seguidores ({followers.length})
            </h2>

            <ul>
              {followers.map(follower => {
                return (
                  <li>
                    <a href={`/users/${follower.login}`} key={follower}>
                      <img
                        src={`http://github.com/${follower}.png`}
                        alt="Foto Perfil"
                      />
                      <span>{follower}</span>
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
