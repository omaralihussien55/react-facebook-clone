import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Emogy, post } from '../../data/data';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Posts() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
   <div>
   {
    post.map((i,idx)=>{
        return(
             
             <Card key={idx} className="mb-3">
             <CardHeader
               avatar={
                 <Avatar src={i.photo} >
                   
                 </Avatar>
               }
               action={
                 <IconButton aria-label="settings">
                   <MoreVertIcon />
                 </IconButton>
               }
               title={i.title}
               subheader="3 m"
             />
             <CardContent>
             <Typography variant="body2" color="text.secondary">
               {i.content}
             </Typography>
           </CardContent>
             <CardMedia
               component="img"
               height="194"
               image={i.img}
               alt="Paella dish"
             />
          
          
             <div className='d-flex justify-content-between w-100 p-1'>
             <div className=''>
               <IconButton className='m-0 p-0' aria-label="add to favorites">
                 <img className='m-0' src={Emogy[0].img} width={20} height={20} />
               </IconButton>
               <IconButton className='m-0 p-0' aria-label="share">
               <img src={Emogy[1].img} width={20} height={20} />
               </IconButton>
          
               <IconButton className='m-0 p-0' aria-label="share">
               <img src={Emogy[2].img} width={20} height={20} />
               </IconButton>
               </div>
               <div className='d-flex justify-content-between '>
                  <a className='mx-1 text-dark' >١٩٥ تعليقًا</a>
                  <a className='mx-1 text-dark'> ٤٠ مشاركة</a>
               </div>
               </div>
               <div className='px-3'>
               <hr/>
               </div>

              
<div className='d-flex justify-content-around align-items-center p-1 mb-1'>
          
      <Button variant="text" size="medium" style={{color:"black"}} >
      <ThumbUpOffAltIcon/>
      <span className='mx-1'>اعجبنى</span>
      </Button>
      
      
      <Button variant="text" size="medium" style={{color:"black"}} >
        <ChatBubbleOutlineOutlinedIcon/>
      <span className='mx-1'>تعليق</span>
      </Button>
      
      
      
      <Button variant="text" size="medium"  style={{color:"black"}}>
      <ReplyOutlinedIcon/>
      <span className='mx-1'>مشاركة</span>
      </Button>
      
          </div>
          
           </Card>
           
        )
    })
   }

   </div>
  );
}
