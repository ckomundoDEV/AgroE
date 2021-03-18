import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import image from "../documentos/wall.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

    const tileData = [
        {
            img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/159777547_932005210900770_8979275275435933448_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fbxhbtN15xQAX9nnFG4&_nc_ht=scontent.fmzt1-1.fna&oh=d99733e6776c856e1de02d987f8951b6&oe=6074F8C2",
            title: 'Image',
            author: 'author',
        },       
        {
            img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/155047760_923416988426259_2298949233322337404_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b5808y3YXKYAX8LCc8q&_nc_ht=scontent.fmzt1-1.fna&oh=67200898bfa4f460f87792b7a80b34d1&oe=6076D4B1",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149095827_914332799334678_5209841410533221808_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ipGegG7jZtIAX-e7T7h&_nc_ht=scontent.fmzt1-1.fna&oh=efc8b6b262e6d6d6ad6eb6ebaa2289d7&oe=60772AA3",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149013422_914059329362025_8697520016211538928_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JEU3cf1cg8gAX_rqZf0&_nc_ht=scontent.fmzt1-1.fna&oh=47e3359fb1d24ded61d65ea73782fa5a&oe=60786FA1",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
            title: 'Image',
            author: 'author',
        }
    ];
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 */
function Carousel() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={1}>
            {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                    title={tile.title}
                    classes={{
                    root: classes.titleBar,
                    title: classes.title,
                    }}
                    actionIcon={
                    <IconButton aria-label={`star ${tile.title}`}>
                        <StarBorderIcon className={classes.title} />
                    </IconButton>
                    }
                />
                </GridListTile>
            ))}
            </GridList>
        </div>
    );

}

export default Carousel



