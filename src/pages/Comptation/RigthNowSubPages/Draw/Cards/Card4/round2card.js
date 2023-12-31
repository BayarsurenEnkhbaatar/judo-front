
const Round2Card = ({data}) => {

  return (
    <div className='overflow-hidden'>
      <div className='border-t border-gray-300 border-b border-r p-1 justify-between flex-col xs:w-32 md:w-60 mt-1 font-Roboto xs:text-xs md:text-sm'>
        <div>
          {
            data?.athlete1.id === 111 ?
            <h1 className='text-white'>.</h1>
            :
            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-2">
                <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
                <h1 className="xs:text-[10px] md:text-xs overflow-hidden whitespace-nowrap max-w-[14ch] text-overflow-ellipsis">{data?.athlete1.lastname.charAt(0)}.{data?.athlete1.username}</h1>
              </div>
              <h1 className="uppercase font-bold text-[8px] mr-1">{data?.athlete1.organization.name.substring(0, 3)}</h1>
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
                <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
                <h1 className="xs:text-[10px] md:text-xs overflow-hidden whitespace-nowrap max-w-[14ch] text-overflow-ellipsis">{data?.athlete2.lastname.charAt(0)}.{data?.athlete2.username}</h1>
              </div>
              <h1 className="uppercase font-bold text-[8px] mr-1">{data?.athlete1.organization.name.substring(0, 3)}</h1>
            </div>
          }
        </div>
      </div>
    </div>



  )
}

export default Round2Card

