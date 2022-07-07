import React from 'react'
export default function testing({posts}) {
  return (
    <div><h1> testing </h1>
    {
         posts
            && posts.map(item => {
                return <div key={item.matterId}>{item.groupName}</div>;
              })
    }
​
    </div>
  )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/hello')
    const results = await response.json()
    // const data = results.results;
    return {
        props :{
            posts : results.data
        }
    }
}