import s from './Post.module.css'


function Post(props) {
  return <div>

    <div className={s.item}>
      <img className={s.avatar} src='https://image.shutterstock.com/image-photo/funny-cat-ophthalmologist-appointmet-squinting-260nw-598805597.jpg'></img>
      {props.message}
      {props.likesCount}

    </div>

  </div>

}

export default Post;