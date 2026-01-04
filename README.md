<h1 align="center">Blog</h1>

<div align="center"> 
  <img src="https://skillicons.dev/icons?i=nodejs,nuxt,scss,ts" />
</div> 

&#xa0;

<div align="center"> 
  <a href="https://crynet.dev">Demo</a>
</div>


## :dart: About ##

This is my personal blog you can download it and see how it works. Download [master](https://github.com/uCryNet/blog/archive/refs/heads/master.zip) branch and install. It is assumed that you already have Node and NPM installed. Admin panel http://localhost:3000/login (admin:admin).
## :checkered_flag: How to start
**Back-end:**
* `cd server`
* `npm i`
* `npm run start`

**Front-end:**
* `cd client`
* `npm i`
* `npm run dev`

## :sparkles: Features ##
:heavy_minus_sign: MongoDB \
:heavy_minus_sign: CRUD \
:heavy_minus_sign: Authorization \
:heavy_minus_sign: Filters

## :memo: Info for front-end
* **Starting in:** localhost:3000
* **Admin panel:** [localhost:3000/login](localhost:3000/login) (admin:admin)

## :memo: Info for back-end:
* **Starting in:** localhost:5000
* **API:** localhost:5000/api/
* SSL is not used locally, but prod use. On a VPS startApp() function is different from the local
* Nginx is not used locally, but prod and use for static files. Local used endpoint that is not available on a VPS


## :white_check_mark: Todos
:x: Back-end refactoring [BE] \
:x: Front-end refactoring [FE] \
:heavy_check_mark: Add features to update image when you update article (old picture need remove) [BE/FE] \
:x: Add multiple select [FE] \
:x: Add feature chose several article category [BE/FE] \
:x: Add multilang [BE/FE] \
:x: Tests coverage  [BE/FE] \
:x: Add "2FA for admin login [BE/FE] \
:heavy_check_mark: Add paginator [BE/FE] \
:x: Update isAdmin solution [FE] \
:heavy_check_mark: Add SSR [FE]
