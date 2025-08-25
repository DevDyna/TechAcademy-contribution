// function oritechInputHelper(recipe) {
//   let inpsRes = [];
//   let ingredients=[]
//   recipe["ingredients"]
//   for (let i = 0; i < 2; i++) {
//     let inpRes = {
//       "count": "count" in recipe[`input${i}`] ? recipe[`input${i}`]["count"] : 1,
//     };
//     if (
//       "basePredicate" in recipe[`input${i}`] &&
//       "tag" in recipe[`input${i}`]["basePredicate"]
//     ) {
//       inpRes["tag"] = recipe[`input${i}`]["basePredicate"]["tag"];
//     } else if ("tag" in recipe[`input${i}`]) {
//       inpRes["tag"] = recipe[`input${i}`]["tag"];
//     } else if ("item" in recipe[`input${i}`]) {
//       inpRes["item"] = recipe[`input${i}`]["item"];
//     }
//     inpsRes.push(inpRes);
//   }

//   return inpsRes;
// }

// function oritechOutputHelper(recipe) {
//   let outRes = {
//     "count": "count" in recipe["result"] ? recipe["result"]["count"] : 1,
//   };
//   if (
//     "basePredicate" in recipe["result"] &&
//     "tag" in recipe["result"]["basePredicate"]
//   ) {
//     outRes["tag"] = recipe["result"]["basePredicate"]["tag"];
//   } else if ("tag" in recipe["result"]) {
//     outRes["tag"] = recipe["result"]["tag"];
//   } else if ("id" in recipe["result"]) {
//     outRes["item"] = recipe["result"]["id"];
//   }
//   return outRes;
// }

/**
 * Extracts input information from a recipe object and returns an array of input resources.
 *
 * The function iterates over two possible input slots in the recipe and constructs an object
 * for each input resource, containing its count and either its tag or item identifier.
 * The tag or item is determined based on the presence of "basePredicate" or direct "tag"/"item"
 * properties within each input object.
 *
 * @param {Object} recipe - The recipe object containing input details.
 * @returns {Array<Object>} An array of input resource objects, each with a count and 
 * either a tag or item property.
 */
function immersiveInputHelper(recipe) {
  let inpsRes = [];

  for (let i = 0; i < 2; i++) {
    let inpRes = {
      count: "count" in recipe[`input${i}`] ? recipe[`input${i}`]["count"] : 1,
    };
    if (
      "basePredicate" in recipe[`input${i}`] &&
      "tag" in recipe[`input${i}`]["basePredicate"]
    ) {
      inpRes["tag"] = recipe[`input${i}`]["basePredicate"]["tag"];
    } else if ("tag" in recipe[`input${i}`]) {
      inpRes["tag"] = recipe[`input${i}`]["tag"];
    } else if ("item" in recipe[`input${i}`]) {
      inpRes["item"] = recipe[`input${i}`]["item"];
    }
    inpsRes.push(inpRes);
  }

  return inpsRes;
}

/**
 * Extracts output information from a recipe object and returns an output resource object.
 *
 * The function constructs an object representing the output resource, containing its count and
 * either its tag or item identifier. The tag or item is determined based on the presence of 
 * "basePredicate", direct "tag", "item", or "id" properties within the result object.
 *
 * @param {Object} recipe - The recipe object containing result details.
 * @returns {Object} An output resource object with a count and either a tag or item property.
 */
function immersiveOutputHelper(recipe) {
  let outRes = {
    count: "count" in recipe["result"] ? recipe["result"]["count"] : 1,
  };

  if ("basePredicate" in recipe["result"]) {
    if ( "tag" in recipe["result"]["basePredicate"] ) {
      outRes["tag"] = recipe["result"]["basePredicate"]["tag"];
    } else if ( "item" in recipe["result"]["basePredicate"] ) {
      outRes["item"] = recipe["result"]["basePredicate"]["item"];
    }
  } else if ("tag" in recipe["result"]) {
    outRes["tag"] = recipe["result"]["tag"];
  } else if ("item" in recipe["result"]) {
    outRes["item"] = recipe["result"]["item"];
  }else if ("id" in recipe["result"]) {
    outRes["item"] = recipe["result"]["id"];
  }
  return outRes;
}
