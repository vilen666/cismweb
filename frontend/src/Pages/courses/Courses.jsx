import React from 'react'

const Courses = () => {
    const course=[
        {
            id:"AICTE",
            sub:[
                {
                    id:"Computer Science Engineering",
                    src:require("./imgs/cse.avif"),
                },
                {
                    id:"Civil Engineering ",
                    src:require("./imgs/civil.avif"),
                },
                {
                    id:"Electronics And Communication Engineering",
                    src:require("./imgs/ece.avif"),
                },
                {
                    id:"Electrical Engineering",
                    src:require("./imgs/ee.avif"),
                },
                {
                    id:"Information Technology",
                    src:require("./imgs/it.avif"),
                },
                {
                    id:"Masters of Business Administration",
                    src:require("./imgs/mba.avif"),
                },
            ]
        },
        {
            id:"NON-AICTE",
            sub:[
                {
                    id:"Bachelor of Computer Application",
                    src:require("./imgs/bca.avif"),
                },
                {
                    id:"BBA Business Analytics",
                    src:require("./imgs/ba.avif"),
                },
                {
                    id:"Bachelor of Business Administration",
                    src:require("./imgs/bba.avif"),
                },
                {
                    id:"Bachelor of Medical Labaratory Technology",
                    src:require("./imgs/bmlt.avif"),
                },
                {
                    id:"B.SC Data Science",
                    src:require("./imgs/data.avif"),
                }]
        }
    ]
  return (
    // <div>Courses</div>
    <>
    <div className=' w-full h-fit p-5'>
        {
            course.map((item)=>{
                return(
                    <>
                    <div>
                        <p className=' text-3xl font-bold  bg-yellow-100 w-fit mb-3'>{item.id}</p>
                        <hr className=' border-black border-1 mr-[50%] mb-12 rounded-full'/>
                        <div className='w-full grid grid-cols-4 gap-20 mb-10'>
                            {
                                item.sub.map((subItem)=>{
                                    return(
                                        <>
                                        <div className='h-[275px] rounded-xl overflow-hidden relative'
                                        style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
                                    >
                                        <img src={subItem.src} alt="#" className=' w-full h-full'/>
                                            <p className='absolute text-xl text-center h-[22%] w-full bottom-0 bg-blue-700 p-2'>{subItem.id}</p>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    </>
                )
            })
        }
                    <hr className=' border-black border-[2px] mx-[45%] mb-12 rounded-full'/>

    </div>
    </>
  )
}

export default Courses