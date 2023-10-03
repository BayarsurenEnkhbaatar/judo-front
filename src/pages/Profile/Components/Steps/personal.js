import { Input, Select, SelectItem } from '@nextui-org/react'
import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

const PersonalStep = () => {
  return (
    <div>
        <h1 className="text-xl mt-4">Тамирчны мэдээлэл</h1>
            <div>
                <div className="mt-4">
                    <h1>Овог</h1>
                    <Input placeholder="Овог бичих"/>
                </div>
                <div className="mt-2">
                    <h1>Нэр</h1>
                    <Input placeholder="Нэр бичих"/>
                </div>
                <div className="mt-2">
                    <h1>Хүйс</h1>
                    <Select
                        placeholder="Хүйс сонгох"
                        labelPlacement="outside"
                        className="max-w-xs"
                        disableSelectorIconRotation
                        selectorIcon={<AiOutlineArrowDown/>}
                    >
                        <SelectItem>
                            Эр
                        </SelectItem>
                        <SelectItem>
                            Эм
                        </SelectItem>
                    </Select>
                </div>
                <div className="mt-4">
                    <h1>Төрсөн он сар өдөр</h1>
                    <Input type='date'/>
                </div>
                <div className="mt-4">
                    <h1>Утасны дугаар 1</h1>
                    <Input placeholder='Утасны дугаар 1 бичих'/>
                </div>
                <div className="mt-4">
                    <h1>Утасны дугаар 2</h1>
                    <Input placeholder='Утасны дугаар 2 бичих'/>
                </div>
            </div>
    </div>
  )
}

export default PersonalStep