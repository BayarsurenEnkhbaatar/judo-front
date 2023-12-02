
const Round2Card = ({data}) => {

  return (
    <>
      <div className='border-t border-gray-300 border-b border-r p-1 justify-between flex-col xs:w-24 md:w-48 mt-1 font-Roboto xs:text-xs md:text-sm'>
          <div>
            {
              data?.athlete1.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center justify-between'>
                <div className="flex items-center gap-2">
                  <h1 className="xs:text-[10px] md:text-xs">{data?.athlete1.lastname.charAt(0)}.{data?.athlete1.username}</h1>
                </div>
                {/* <h1 className="uppercase font-bold text-xs mr-1">{data?.athlete1.organization.name.substring(0, 3)}</h1> */}
              </div>
            }
          </div>
          <div>
            {
              data?.athlete2.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center justify-between'>
                <div className="flex items-center gap-2">
                  <h1 className="xs:text-[10px] md:text-xs">{data?.athlete2.lastname.charAt(0)}.{data?.athlete2.username}</h1>
                </div>
                {/* <h1 className="uppercase font-bold text-xs mr-1">{data?.athlete2.organization.name.substring(0, 3)}</h1> */}
              </div>
            }
          </div>
      </div>
    </>
  )
}

export default Round2Card

