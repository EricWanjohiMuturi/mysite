import { CodeBracketIcon } from '@heroicons/react/16/solid'

interface HeadProps {
    title: string;
}

export const HeadingOne = ({title}:HeadProps) => {
  return (
    <>
    <div className='text-center flex sm:mx-96 rotate-[-6deg] gap-2 justify-center'>
        <CodeBracketIcon width={40} className='text-blue-600'/>
        <h2 className='text-4xl my-10 text-blue-600 font-extrabold underline pb-2'>
            {title}
        </h2>
    </div>
    
    </>
  )
}

export const HeadingTwo = ({title}:HeadProps) => {
    return (
      <>
      <div className='text-left'>
          <h3 className='text-2xl mt-2 text-blue-600 font-extrabold pb-2'>
              {title}
          </h3>
      </div> 
      </>
    )
}