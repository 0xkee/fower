import { Box } from '@styli/react';

export default () => {
  return (
    <div>
      <Box white>
        <Box w-100 bgRed400 p2>
          w-100
        </Box>
        <Box w-10rem bgYellow400 p2>
          w-10rem
        </Box>
        <Box w={100} bgGreen400 p2>
          w={'{100}'}
        </Box>
        <Box w="400px" bgBlue400 p2>
          w="400px"
        </Box>
        <Box w="80%" bgPurple400 p2>
          w="80%"
        </Box>
      </Box>

      <Box white textCenter spaceY2>
        <Box toLeft>
          <Box w={1 / 2} bgOrange400 py-10>
            w={'{1 / 2}'}
          </Box>
          <Box w={1 / 2} bgRed400 py-10>
            w={'{1 / 2}'}
          </Box>
        </Box>

        <Box toLeft>
          <Box w={1 / 3} bgOrange400 py-10>
            w={'{1 / 3}'}
          </Box>
          <Box w={2 / 3} bgRed400 py-10>
            w={'{2 / 3}'}
          </Box>
        </Box>

        <Box toLeft>
          <Box w={1 / 4} bgOrange400 py-10>
            w={'{1 / 4}'}
          </Box>
          <Box w={3 / 4} bgRed400 py-10>
            w={'{3 / 4}'}
          </Box>
        </Box>

        <Box toLeft>
          <Box w={0.1} bgOrange400 py-10>
            w={'{0.1}'}
          </Box>
          <Box w={0.9} bgRed400 py-10>
            w={'{0.9}'}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
