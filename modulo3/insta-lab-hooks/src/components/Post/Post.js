import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtir, setCurtir] = useState(false)
  const [numeroDeCurtidas, setNumeroDeCurtidas] = useState(0)
  const [comentar, setComentar] = useState(false)
  const [numeroDeComentarios, setNumeroDeComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])


  const onClickCurtida = () => {
    if (curtir) {
      setCurtir(!curtir)
      setNumeroDeCurtidas(numeroDeCurtidas - 1)
    }
    else {
      setCurtir(!curtir)
      setNumeroDeCurtidas(numeroDeCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    setComentar(!comentar)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
    setComentarios(listaDeComentarios)
    setComentar(false)
    setNumeroDeComentarios(numeroDeComentarios + 1)
  }

  const iconeCurtir = curtir ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = comentar ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    comentarios.map(comment => {
      return (
        <CommentContainer>
          <p>{comment}</p>
        </CommentContainer>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtir}
          onClickIcone={onClickCurtida}
          valorContador={numeroDeCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroDeComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post