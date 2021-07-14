import React, { useState } from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(props) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt="Foto Perfil"
      />
      <hr />

      <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'jonatas-melo-silva'
  const [communities, setCommunities] = useState([
    {
      id: new Date().toISOString(),
      title: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    }
  ])
  const followers = [
    'davidallysson',
    'Paulo-Costa',
    'Breno-Silva1',
    'mergirl',
    'AdlemDutra',
    'Kristian-Roopnarine'
  ]
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
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeAre" style={{ gridArea: 'welcomeAre' }}>
          <Box>
            <h1 className="title">Bem-vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle"> O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCreateCommunity(e) {
                e.preventDefault()
                const formData = new FormData(e.target)

                const community = {
                  id: new Date().toISOString(),
                  title: formData.get('title'),
                  image: formData.get('image')
                }
                const updatedCommunities = [...communities, community]
                setCommunities(updatedCommunities)
                alert(communities)
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque a url da imagem para usarmos de capa"
                  name="image"
                  type="url"
                  aria-label="Coloque a url da imagem para usarmos de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="ProfileRelationsAre"
          style={{ gridArea: 'ProfileRelationsAre' }}
        >
          {/* Comunidade */}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>

            <ul>
              {communities.map(community => {
                return (
                  <li key={community.id}>
                    <a href={`/users/${community.title}`} key={community.title}>
                      <img src={community.image} alt="Foto da Comunidade" />
                      <span>{community.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          {/* Pessoas da Comunidade */}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritePersons.length})
            </h2>

            <ul>
              {favoritePersons.map(person => {
                return (
                  <li key={person}>
                    <a href={`/users/${person}`}>
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
          {/* Meus seguidores */}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Meus Seguidores ({followers.length})</h2>

            <ul>
              {followers.map(follower => {
                return (
                  <li key={follower}>
                    <a href={`/users/${follower.login}`}>
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
