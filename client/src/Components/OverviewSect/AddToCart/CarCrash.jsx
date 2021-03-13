let sizeOptions = Object.entries(skus).map((pair, index) => {
  return <option value={pair[1].size} className={styling.option}>{pair[1].size}</option>
  // return <SizeButton changeSelectedSize={this.changeSelectedSize} size={pair[1].size} key={index} />
})

let selectedSku;
let quantityAvailable;
if (currentlySelectedSize !== 'SELECT SIZE') {
  Object.entries(skus).filter((sku) => {
      if (sku[1].size === currentlySelectedSize) {
          selectedSku = sku[0];
          quantityAvailable = sku[1].quantity;
          // console.log(selectedSku);
      }
  })
}

return (

  <div className={styling.buttonContainer}>

      <div className={styling.row1Container}>

          {/* <div className={styling.colContainer}> */}

          <div>
              {/* <label> */}
              {/* className={styling.sizeButton} */}
              <label  onClick={this.showMenu}>

                      {currentlySelectedSize}
                      {/* <i className={'fas fa-angle-down fa-fw'} /> */}
                  <select name={currentlySelectedSize}>

                      {sizeOptions}

                  {/* {showMenu ? (
                  <div className={styling.sizeOptionsList} ref={(element) => { this.dropdownMenu = element; }}> */}
                      {/* <select> */}
                      {/* { showMenu ? (
                          currentlySelectedSize
                      ) : ( sizeOptions
                      )} */}
                  {/* // {sizeOptions} */}
                      {/* </select> */}
                  {/* </div>
              ) : (
                  null
              )} */}

                  </select>
              </label>


              {/* </label> */}
          </div>


          {/* </div> */}

          <QuantitySelector selectedSku={selectedSku} quantity={quantityAvailable} />

      </div>
  </div>
)