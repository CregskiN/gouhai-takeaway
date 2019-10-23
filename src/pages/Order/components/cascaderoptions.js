export const options = [
    {
        value: 'huanghua',
        label: '黄骅',
        children: [
            {
                value: 'hebeinongda',
                label: '河北农大',
                children: [
                    {
                        value: '11.10',
                        label: '11:10',
                    },
                    {
                       value: '12.10',
                       label: '12:10',
                    },
                    {
                        value: '17.30',
                        label: '17:30',
                    },
                    {
                        value: '18.30',
                        label: '18:30',
                    },
                ],
            },

            {
                value: 'beizhongyi',
                label: '北中医',
                children: [
                    {
                        value: '11.10',
                        label: '11:10',
                    },
                    {
                       value: '12.10',
                       label: '12:10',
                    },
                    {
                        value: '17.30',
                        label: '17:30',
                    },
                    {
                        value: '18.30',
                        label: '18:30',
                    },
                ],
            },

        ],

    },

    {
        value: '_forbidden',
        label: '火星',
        children: [
             {
        value: '_forbidden',
        label: '暂未开通此项业务',
        children: [
            {
                value: '_forbidden',
                label: '还点？！'
            }
        ]
            },

        ],
    },
];

function onChange(value) {
    console.log(value);
}


