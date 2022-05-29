export default{
    name:'about',
    title:'About',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
          },
        
    ]
}