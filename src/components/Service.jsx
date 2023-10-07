import { FiDollarSign } from 'react-icons/fi'
import { BiSolidBookReader } from 'react-icons/bi'
import {SiHashnode} from 'react-icons/si'
import { Link } from 'react-router-dom'

const Service = ({ item }) => {
    console.log(item)
    return (
        <div>
            {/* single event service */}
            <div className="border rounded-md p-2">
                <img className="w-full h-52 rounded-md hover:translate-x-3" src={item.img[0]} alt="" />
                <div className='py-2 '>
                    <h3 className='text-2xl '> {item.name}</h3>
                    <p className='text-gray-400 text-sm'>{item.description.slice(0, 100)}</p>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2 '>Price: <span className='flex items-center' > <FiDollarSign /> {item.price} </span></p>
                        <Link to={`/services/${item.id}`}><button className='flex items-center gap-2 bg-blue-400 py-1 px-3 rounded-md'><BiSolidBookReader /> See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service