import '../sass/home.scss'
export default class HomeController {
  constructor($location) {
    this.$location = $location
    this.title = 'WebPack Angular ES6'
    this.description = 'This blog on ES6.'
  }
}

HomeController.$inject = ['$location']
