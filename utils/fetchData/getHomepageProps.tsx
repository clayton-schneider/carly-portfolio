export const query = `{
  homepage{
    ...homepageFields
    slices{
     ...on portfolio{
       variation{
         ...on default{
           primary{
             title
             description
           }
           items {
             project{
               ...projectFields
             }
           }
         }
       }
     }
   }
  }
}`;
