import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import searchScreen from "./src/screens/searchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";
const navigator =createStackNavigator({

  Search:searchScreen,
  ResultShow:ResultShowScreen
},
{
  intitialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Foodie Woody'
          
  }

//   git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/KapilKumar7/Foodie-Woody.git
// git push -u origin main

});
export default createAppContainer(navigator)