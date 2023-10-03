import React from 'react'

const ImagesStep = () => {
  return (
    <div className='mt-4'>
        <h1 className="text-xl mt-4">Бичиг баримт болон зураг оруулах</h1>

        <div className='mt-2'>
            <div>
                <div class="mb-6 pt-4">
                    <label class="mb-5 block text-sm ">
                        Тамирчны цээж зураг
                    </label>

                    <div class="mb-8">
                        <input type="file" name="file" id="file" class="sr-only" />
                        <label
                            for="file"
                            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                            <div>
                                <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                    Цээж зураг
                                </span>
                                <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                    Or
                                </span>
                                <span
                                    class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                >
                                    Энд дарна уу
                                </span>
                            </div>
                        </label>
                    </div>
                    <label class="mb-5 block text-sm ">
                        Тамирчны бичиг баримт
                    </label>

                    <div class="mb-8">
                        <input type="file" name="file" id="file" class="sr-only" />
                        <label
                            for="file"
                            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                            <div>
                                <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                    Бичиг баримт
                                </span>
                                <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                    Or
                                </span>
                                <span
                                    class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                >
                                    Энд дарна уу
                                </span>
                            </div>
                        </label>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default ImagesStep

