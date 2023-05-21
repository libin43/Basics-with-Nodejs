const e = require('express');
var express = require('express');
var router = express.Router();

const userNameDB = "Libin Biji"
const passwordDB = "0000"
 
 


/* GET home page. */
router.get('/', function(req, res) {
  
 
  let user = req.session.user
  if(user){
    
    res.redirect('/homepage')
    
    
   
  }else {
    res.render('index');
 }
});

router.get('/homepage', function(req, res) {
 
 
  let user = req.session.user
  console.log('got it')
  console.log(user)
  if(user){
    res.header(
      "Cache-Control",
      "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
    );
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
 
    let products =[{
      name: "IPHONE 14",
      category:"Mobile",
      description: "Big Billion Days",
      image:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg"
    },{
      name: "Nothing 1",
      category:"Mobile",
      description: "Big Billion Days",
      image:"https://www.zdnet.com/a/img/resize/8f9ece2d7793fd1a862e69670cc019b096187ac6/2022/08/17/2a1f3c65-4c08-4c30-8ee2-e5949be4e394/nothing-phone-1-hero.jpg?auto=webp&fit=crop&height=1200&width=1200"
    },{
      name: "Samsung s22",
      category:"Mobile",
      description: "Big Billion Days",
      image:"https://www.guanzongroup.com.ph/wp-content/uploads/2022/03/samsung-galaxy-s22-ultra-1.jpg"
    },{
      name: "Oneplus 10pro",
      category:"Mobile",
      description: "Big Billion Days",
      image:"https://i.guim.co.uk/img/media/2084ef0ab92ff7dfc4d3025a3281e4c0b05c261f/326_453_4949_2969/master/4949.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d2736b1aa0bdc76c04f8df8dd29011f6"
    }]
    res.render('home',{products});
  }else{
    res.render('index')
  }
});

router.post('/homepage',(req,res)=>{  
  

  
  const userData ={Username,Password}=req.body
  if(Username===userNameDB &&  Password===passwordDB){
    
    req.session.user=userData
    console.log(req.session.userID)
    console.log('logged innn')
    
    
     
    res.redirect('/homepage')
  }else{
    console.log("error")
    
    res.redirect('/errorpage')
  }
})

router.get('/errorpage',function(req,res) {
  
  
  res.render('index', { error: 'Invalid Credentials' })
})

router.get('/logout',(req,res)=>{

  res.header(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  
  
  req.session.destroy()
  
  console.log('logout clicked!')  

 

   
  res.redirect('/') 
  
})

module.exports = router;
