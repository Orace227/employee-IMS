import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

// assets
// import EarningIcon from 'assets/images/icons/earning.svg';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import Iconify from 'components/iconify';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary.light} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary.light} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const TotalAttendedCard = ({ isLoading }) => {
  const theme = useTheme();
  const [orderCount, setOrderCount] = useState();
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const getCancledOrders = async () => {
    const GetCartId = await axios.get('/GetCartId');
    console.log(GetCartId.data.cartId);
    const cartId = GetCartId.data.cartId;
    const AttendedOrders = await axios.get(`/GetOrders?Status=attended&cartId=${cartId}`, {
      withCredentials: true // Include credentials (cookies) with the request
    });
    if (AttendedOrders) {
      // console.log(CanceledOrders.data.existedOrders.length);
      setOrderCount(AttendedOrders.data.existedOrders.length);
    }
  };
  useEffect(() => {
    getCancledOrders();
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  {/* <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.secondary[800],
                        mt: 1
                      }}
                    >
                      <Iconify icon={'eva:checkmark-outline'} /> 
                    </Avatar>
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{orderCount}</Typography>
                  </Grid>
                  {/* <Grid item>
                    <Avatar
                      sx={{
                        cursor: 'pointer',
                        ...theme.typography.smallAvatar,
                        backgroundColor: theme.palette.secondary[200],
                        color: theme.palette.secondary.dark
                      }}
                    >
                      <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                    </Avatar>
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: theme.palette.primary
                  }}
                >
                  Total Attended Orders
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalAttendedCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalAttendedCard;
