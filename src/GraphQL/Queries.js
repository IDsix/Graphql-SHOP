import { gql } from "@apollo/client";
export const LOAD_CATEGORIES = gql`
query{
    category(id: 100092) {
      categories {
        name {
          value
          language
        }
        slug {
          value
          language
        }
        products{
            items {
                name(language:"NL"){
                value
                language
              }
              slug{
                  value
              }
            }
          }
      }
    }
  }
`

export const LOAD_PRODUCT=gql`
query getProductDetails($slug:String) {
    product(slug:$slug){
      name{
        value
      }
      offers{
        price
      }
      price{
        value
      }
      status
      manufacturer
    }
  }
  `;
