

export default function MobileSet(prop: any) {
    return (
        <div className="text-center sm:hidden">
                <h3 style={{color:"red"}}>{prop.errorMessage}</h3>
                <h3 style={{color:"green"}}>{prop.succes}</h3>
                <div>
                    <h4 style={{color:prop.generalTextColor}}>Name Forum</h4>
                    <input style={{color:prop.generalTextColor, backgroundColor:prop.backgroundColorZoneText}} value={prop.nameForum} onChange={(b)=> prop.setNameForum(b.target.value)} pattern="^([A-Za-z\-ËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.?\d\s]){5,15}$" required type="text" name="" id="" />
                </div>

                <div className="flex justify-center gap-6">
                    <div>
                        <h4 style={{color:prop.generalTextColor}}>General Text Color</h4>
                        <input value={prop.generalTextColor} onChange={(b)=> prop.setGeneralTextColor(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <h4 style={{color:prop.generalTextColor}}>Navbar Text Color</h4>
                        <input value={prop.navbarTextColor} onChange={(b)=> prop.setNavbarTextColor(b.target.value)} type="color" name="" id=""  pattern="^#+([A-Za-z0-9]){6,6}" required/>
                    </div>

                    <div>

                        <h4 style={{color:prop.generalTextColor}}>Name Forum Color</h4>
                        <input value={prop.nameForumColor} onChange={(b)=> prop.setNameForumColor(b.target.value)} type="color" name="" id=""  pattern="^#+([A-Za-z0-9]){6,6}" required/>
                        <h4 style={{color:prop.generalTextColor}}>Text Color General Button</h4>
                        <input value={prop.textColorGeneralButton} onChange={(b)=> prop.setTextColorGeneralButton(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                    </div>
                </div>
                
                <div className="flex justify-center gap-6">

                    <div>

                        <h4 style={{color:prop.generalTextColor}}>Text Color Delete Button</h4>
                        <input value={prop.textColorDeleteButton} onChange={(b)=> prop.setTextColorDeleteButton(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <h4 style={{color:prop.generalTextColor}}>Text Color Update Button</h4>
                        <input value={prop.textColorUpdateButton} onChange={(b)=> prop.setTextColorUpdateButton(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                    </div>
                    <div>

                        <h4 style={{color:prop.generalTextColor}}>Text Color Card Member</h4>
                        <input value={prop.textColorCardMember} onChange={(b)=> prop.setTextColorCardMember(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <h4 style={{color:prop.generalTextColor}}>Background Color Navbar</h4>
                        <input value={prop.backgroundColorNavbar} onChange={(b)=> prop.setBackgroundColorNavbar(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                    </div>
                </div>

                <div className="flex justify-center gap-6">

                    <div>
                        <h4 style={{color:prop.generalTextColor}}>Background Color First</h4>
                        <input value={prop.backgroundColorFirst} onChange={(b)=> prop.setBackgroundColorFirst(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <h4 style={{color:prop.generalTextColor}}>Background Color Second</h4>
                        <input value={prop.backgroundColorSecond} onChange={(b)=> prop.setBackgroundColorSecond(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                    </div>
                    <div>

                        <h4 style={{color:prop.generalTextColor}}>Background Color Cadre</h4>
                        <input value={prop.backgroundColorCadre} onChange={(b)=> prop.setBackgroundColorCadre(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <h4 style={{color:prop.generalTextColor}}>Background Color Categorie</h4>
                        <input value={prop.backgroundColorCategorie} onChange={(b)=> prop.setBackgroundColorCategorie(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                    </div>
                </div>
                
                <div className="flex justify-center gap-6">

                    <div>

                        <h4 style={{color:prop.generalTextColor}}>Background Color Button Burger</h4>
                        <input value={prop.backgroundColorButtonBurger} onChange={(b)=> prop.setBackgroundColorButtonBurger(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <h4 style={{color:prop.generalTextColor}}>Background Color General Button</h4>
                        <input value={prop.backgroundColorGeneralButton} onChange={(b)=> prop.setBackgroundColorGeneralButton(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                    </div>
                    <div>

                        <h4 style={{color:prop.generalTextColor}}>Background Color Delete Button</h4>
                        <input value={prop.backgroundColorDeleteButton} onChange={(b)=> prop.setBackgroundColorDeleteButton(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <h4 style={{color:prop.generalTextColor}}>Background Color Update Button</h4>
                        <input value={prop.backgroundColorUpdateButton} onChange={(b)=> prop.setBackgroundColorUpdateButton(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                    </div>
                </div>


                    <div>
                        <h4 style={{color:prop.generalTextColor}}>Background Color Third</h4>
                        <input value={prop.backgroundColorThird} onChange={(b) => prop.setBackgroundColorThird(b.target.value)} type="color" name="" id="" />
                        <h4 style={{color:prop.generalTextColor}}>Background Color Card Member</h4>
                        <input value={prop.backgroundColorCardMember} onChange={(b)=> prop.setBackgroundColorCardMember(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                        <h4 style={{color:prop.generalTextColor}}>Background Color Zone Text</h4>
                        <input value={prop.backgroundColorZoneText} onChange={(b)=> prop.setBackgroundColorZoneText(b.target.value)} type="color" name="" id="" pattern="^#+([A-Za-z0-9]){6,6}" required />
                    </div>
                <div className="flex justify-center items-center gap-12">
                    <div>

                        <h4 style={{color:prop.generalTextColor}}>Icone Delete Post</h4>
                        <img className="h-12 w-12" src={"/image/icone/" + prop.baliseIMGDeletePost} alt="Icone Delete Post" />
                        <input className="w-14" style={{color:prop.generalTextColor}} onChange={(b)=> prop.setIconeDeletePost(b.target.files[0])} type="file" name="iconeDeletePost" id="" />
                        <h4 style={{color:prop.generalTextColor}}>Icone Update Post</h4>
                        <img className="h-12 w-12" src={"/image/icone/" + prop.baliseIMGUpdatePost} alt="Icone Update Post" />
                        <input className="w-14" style={{color:prop.generalTextColor}}  onChange={(b)=> prop.setIconeUpdatePost(b.target.files[0])} type="file" name="iconeUpdatePost" id="" />
                    </div>
                    <div>
                        <h4 style={{color:prop.generalTextColor}}>Icone Like True</h4>
                        <img style={{color:prop.generalTextColor}} className="h-8 w-8" src={"/image/icone/" + prop.baliseIMGLikeTrue} alt="Icone Like True" />
                        <input name="iconeLikeTrue" className="w-14" style={{color:prop.generalTextColor}} onChange={(b)=> prop.setIconeLikeTrue(b.target.files[0])} type="file"  id="" />
                        <h4 style={{color:prop.generalTextColor}}>Icone Like False</h4>
                        <img style={{color:prop.generalTextColor}} className="h-8 w-8" src={"/image/icone/" + prop.baliseIMGLikeFalse} alt="Icone Like False" />
                        <input name="iconeLikeFalse" className="w-14" style={{color:prop.generalTextColor}}  onChange={(b)=> prop.setIconeLikeFalse(b.target.files[0])} type="file"  id="" />
                    </div>
                </div>
                
                <button className="rounded-full border border-black border-solid h-8 w-28 sm:rounded-full sm:border sm:border-black sm:border-solid sm:h-8 sm:w-28 md:rounded-full md:border md:border-black md:border-solid md:h-8 md:w-28 lg:rounded-full lg:border lg:border-black lg:border-solid lg:h-8 lg:w-28 xl:rounded-full xl:border xl:border-black xl:border-solid xl:h-8 xl:w-28 text-center" style={{color:prop.textColorGeneralButton, backgroundColor:prop.backgroundColorGeneralButton}}>Modifier</button>
           
        </div>
    )
}