import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return <div>
        <div>
            <img src='https://i.ytimg.com/vi/HsD__RCMOXE/maxresdefault.jpg'></img>
        </div>
        <div className={s.descriptionBox}>
            ava+description
    </div>
    </div>
}

export default ProfileInfo;
