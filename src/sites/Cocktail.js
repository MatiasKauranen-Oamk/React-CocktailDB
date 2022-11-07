import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export default function Cocktail() {
  const [search, setSearch] = useState('')
  const [strDrink, setstrDrink] = useState('')
  const [strInstructions, setstrInstructions] = useState('')
  const [strGlass, setstrGlass] = useState('')
  const [strImg, setstrImg] = useState('')
  const [strAlcoholic, setstrAlcoholic] = useState('')
  const [strIngredient1, setstrIngredient1] = useState('')
  const [strIngredient2, setstrIngredient2] = useState('')
  const [strIngredient3, setstrIngredient3] = useState('')
  const [strIngredient4, setstrIngredient4] = useState('')
  const [strIngredient5, setstrIngredient5] = useState('')
  const [strIngredient6, setstrIngredient6] = useState('')
  const [strIngredient7, setstrIngredient7] = useState('')
  const [strIngredient8, setstrIngredient8] = useState('')
  const [strIngredient9, setstrIngredient9] = useState('')
  const [strIngredient10, setstrIngredient10] = useState('')
  const [strIngredient11, setstrIngredient11] = useState('')
  const [strIngredient12, setstrIngredient12] = useState('')
  const [strIngredient13, setstrIngredient13] = useState('')
  const [strIngredient14, setstrIngredient14] = useState('')
  const [strMeasure1, setstrMeasure1] = useState('')
  const [strMeasure2, setstrMeasure2] = useState('')
  const [strMeasure3, setstrMeasure3] = useState('')
  const [strMeasure4, setstrMeasure4] = useState('')
  const [strMeasure5, setstrMeasure5] = useState('')
  const [strMeasure6, setstrMeasure6] = useState('')
  const [strMeasure7, setstrMeasure7] = useState('')
  const [strMeasure8, setstrMeasure8] = useState('')
  const [strMeasure9, setstrMeasure9] = useState('')
  const [strMeasure10, setstrMeasure10] = useState('')
  const [strMeasure11, setstrMeasure11] = useState('')
  const [strMeasure12, setstrMeasure12] = useState('')
  const [strMeasure13, setstrMeasure13] = useState('')
  const [strMeasure14, setstrMeasure14] = useState('')


  function searchdrink() {

    const searchurl = url + search
    axios.get(searchurl)
      .then((response) => {
        console.log(searchurl)
        console.log(response.data)
        setstrDrink(response.data.drinks[0].strDrink);
        setstrInstructions(response.data.drinks[0].strInstructions);
        setstrGlass(response.data.drinks[0].strGlass);
        setstrImg(response.data.drinks[0].strDrinkThumb);
        setstrAlcoholic(response.data.drinks[0].strAlcoholic);
        setstrIngredient1(response.data.drinks[0].strIngredient1);
        setstrIngredient2(response.data.drinks[0].strIngredient2);
        setstrIngredient3(response.data.drinks[0].strIngredient3);
        setstrIngredient4(response.data.drinks[0].strIngredient4);
        setstrIngredient5(response.data.drinks[0].strIngredient5);
        setstrIngredient6(response.data.drinks[0].strIngredient6);
        setstrIngredient7(response.data.drinks[0].strIngredient7);
        setstrIngredient8(response.data.drinks[0].strIngredient8);
        setstrIngredient9(response.data.drinks[0].strIngredient9);
        setstrIngredient10(response.data.drinks[0].strIngredient10);
        setstrIngredient11(response.data.drinks[0].strIngredient11);
        setstrIngredient12(response.data.drinks[0].strIngredient12);
        setstrIngredient13(response.data.drinks[0].strIngredient13);
        setstrIngredient14(response.data.drinks[0].strIngredient14);
        setstrMeasure1(response.data.drinks[0].strMeasure1);
        setstrMeasure2(response.data.drinks[0].strMeasure2);
        setstrMeasure3(response.data.drinks[0].strMeasure3);
        setstrMeasure4(response.data.drinks[0].strMeasure4);
        setstrMeasure5(response.data.drinks[0].strMeasure5);
        setstrMeasure6(response.data.drinks[0].strMeasure6);
        setstrMeasure7(response.data.drinks[0].strMeasure7);
        setstrMeasure8(response.data.drinks[0].strMeasure8);
        setstrMeasure9(response.data.drinks[0].strMeasure9);
        setstrMeasure10(response.data.drinks[0].strMeasure10);
        setstrMeasure11(response.data.drinks[0].strMeasure11);
        setstrMeasure12(response.data.drinks[0].strMeasure12);
        setstrMeasure13(response.data.drinks[0].strMeasure13);
        setstrMeasure14(response.data.drinks[0].strMeasure15);


      })
  }

  useEffect(() => {
    axios.get(url + { search })
      .then((response) => {
        console.log(response.data)
        setstrDrink(response.data.drinks[0].strDrink);
        setstrAlcoholic(response.data.drinks[0].strAlcoholic);
        setstrInstructions(response.data.drinks[0].strInstructions);
        setstrGlass(response.data.drinks[0].strGlass);
        setstrImg(response.data.drinks[0].strDrinkThumb);
        setstrIngredient1(response.data.drinks[0].strIngredient1);
        setstrIngredient2(response.data.drinks[0].strIngredient2);
        setstrIngredient3(response.data.drinks[0].strIngredient3);
        setstrIngredient4(response.data.drinks[0].strIngredient4);
        setstrIngredient5(response.data.drinks[0].strIngredient5);
        setstrIngredient6(response.data.drinks[0].strIngredient6);
        setstrIngredient7(response.data.drinks[0].strIngredient7);
        setstrIngredient8(response.data.drinks[0].strIngredient8);
        setstrIngredient9(response.data.drinks[0].strIngredient9);
        setstrIngredient10(response.data.drinks[0].strIngredient10);
        setstrIngredient11(response.data.drinks[0].strIngredient11);
        setstrIngredient12(response.data.drinks[0].strIngredient12);
        setstrIngredient13(response.data.drinks[0].strIngredient13);
        setstrIngredient14(response.data.drinks[0].strIngredient14);
        setstrMeasure1(response.data.drinks[0].strMeasure1);
        setstrMeasure2(response.data.drinks[0].strMeasure2);
        setstrMeasure3(response.data.drinks[0].strMeasure3);
        setstrMeasure4(response.data.drinks[0].strMeasure4);
        setstrMeasure5(response.data.drinks[0].strMeasure5);
        setstrMeasure6(response.data.drinks[0].strMeasure6);
        setstrMeasure7(response.data.drinks[0].strMeasure7);
        setstrMeasure8(response.data.drinks[0].strMeasure8);
        setstrMeasure9(response.data.drinks[0].strMeasure9);
        setstrMeasure10(response.data.drinks[0].strMeasure10);
        setstrMeasure11(response.data.drinks[0].strMeasure11);
        setstrMeasure12(response.data.drinks[0].strMeasure12);
        setstrMeasure13(response.data.drinks[0].strMeasure13);
        setstrMeasure14(response.data.drinks[0].strMeasure15);
      })

  }, [])

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div>
        <button type="button" onClick={searchdrink} >search</button>
        <h3>Cocktail of the day</h3>
        <img src={strImg} alt="" />
        <div id="content">
          <p>{strDrink}</p>
          <h3>Drink type</h3>
          <p>{strAlcoholic}</p>
          <h3>Glass</h3>
          <p>{strGlass}</p>
          <h3>Ingredients</h3>
          <p>{strIngredient1} {strMeasure1}</p>
          <p>{strIngredient2} {strMeasure2}</p>
          <p>{strIngredient3} {strMeasure3}</p>
          <p>{strIngredient4} {strMeasure4}</p>
          <p>{strIngredient5} {strMeasure5}</p>
          <p>{strIngredient6} {strMeasure6}</p>
          <p>{strIngredient7} {strMeasure7}</p>
          <p>{strIngredient8} {strMeasure8}</p>
          <p>{strIngredient9} {strMeasure9}</p>
          <p>{strIngredient10} {strMeasure10}</p>
          <p>{strIngredient11} {strMeasure11}</p>
          <p>{strIngredient12} {strMeasure12}</p>
          <p>{strIngredient13} {strMeasure13}</p>
          <p>{strIngredient14} {strMeasure14}</p>
          <h3>Instructions</h3>
          <p>{strInstructions}</p>
        </div>
      </div>
    </div>);
}