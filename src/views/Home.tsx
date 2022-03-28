import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRight from "@mui/icons-material/ArrowRightAltOutlined";

import styles from "../styles/home.module.css";

export function Home() {
	return (
		<>
			<Box
				display="flex"
				className={styles["wrapper-1"]}
				position="relative"
				minHeight="100vh"
				justifyContent="center"
			>
				<Box
					position="absolute"
					top="0"
					left="0"
					minWidth="100%"
					minHeight="100vh"
					sx={{ backgroundColor: "rgba(21, 61, 89, 0.45)" }}
					className={styles["bg-overlay"]}
				/>
				<Box
					className={styles["container-1"]}
					display="flex"
					alignSelf="center"
					justifyContent="center"
					alignItems="start"
					flexWrap="wrap"
					paddingTop="2rem"
					zIndex="1"
				>
					<Box
						className={styles["container-1__title"]}
						display="flex"
						width="100%"
						justifyContent="center"
						alignItems="center"
					>
						<Box
							className={styles["animated-logo"]}
							position="relative"
							alignSelf="center"
							marginRight="5.5rem"
							borderRadius="50%"
							height="200px"
							width="200px"
						>
							<Box
								top="1"
								left="1"
								position="absolute"
								className={styles["animated-logo__glow"]}
							/>
							<Box
								component="img"
								top="1"
								left="1"
								src="https://cdn.discordapp.com/attachments/957337496847519754/957388265596551188/logo.webp"
								alt="Logo"
								width="100%"
								borderRadius="50%"
								position="absolute"
								sx={{ backgroundColor: "#000" }}
							/>
						</Box>
						<Box alignSelf="center" textAlign="center">
							<Typography
								fontSize="4rem"
								color="whitesmoke"
								fontFamily="Oswald"
							>
								The BeanMakers
							</Typography>
							<Typography
								fontSize="2rem"
								color="whitesmoke"
								fontFamily="Source Sans Pro"
							>
								Welcomes You To The
							</Typography>
							<Typography
								fontSize="4.5rem"
								color="whitesmoke"
								fontWeight="600"
								fontFamily="Oswald"
							>
								Bean Factory
							</Typography>
						</Box>
					</Box>
					<Button
						className={styles["container-1__btn"]}
						disableRipple
						onClick={() =>
							document.getElementById("home-container-2")?.scrollIntoView()
						}
					>
						Go Bean Hunting
					</Button>
				</Box>
			</Box>
			<Box
				id="home-container-2"
				display="flex"
				className={styles["wrapper-2"]}
				position="relative"
				minHeight="100vh"
				justifyContent="center"
			>
				<Box
					position="absolute"
					top="0"
					left="0"
					minWidth="100%"
					minHeight="100vh"
					sx={{ backgroundColor: "rgba(73, 34, 141, 0.45)" }}
					className={styles["bg-overlay"]}
				/>
				<Box
					className={styles["container-2"]}
					display="flex"
					alignSelf="center"
					justifyContent="center"
					alignItems="start"
					flexWrap="wrap"
					zIndex="1"
				>
					<Box
						display="flex"
						flexWrap="wrap"
						alignSelf="center"
						height="auto"
						width="306px"
						borderRadius="5%"
						padding="15px"
						border="1px solid whitesmoke"
						sx={{ background: "#101820ff" }}
					>
						{[
							"https://cdn.discordapp.com/attachments/957337496847519754/957627365918375987/bean4.webp",
							"https://cdn.discordapp.com/attachments/957337496847519754/957627366413324308/bean2.webp",
							"https://cdn.discordapp.com/attachments/957337496847519754/957627366639808562/bean3.webp",
							"https://cdn.discordapp.com/attachments/957337496847519754/957627366149066752/bean1.webp",
						].map((x) => (
							<Box
								component="img"
								src={x}
								height="145px"
								width="145px"
								margin="4px"
								borderRadius="5%"
							/>
						))}
					</Box>
					<Box
						textAlign="left"
						marginLeft="6rem"
						color="whitesmoke"
						alignSelf="center"
					>
						<Typography fontSize="3rem" fontFamily="Oswald" fontWeight="600">
							Welcome Bean Hunters
						</Typography>
						<Box
							height="4px"
							width="65%"
							sx={{ background: "#f2aa4cff" }}
						></Box>
						<Typography
							width="30rem"
							marginTop="2rem"
							fontWeight="500"
							fontSize="1.3rem"
							fontFamily="Source Sans Pro"
						>
							You are invited to explore our vast collection of 10,000 unique
							beans where you can discover Hand Grown, Exotic, Seasonal and
							Regular Beans. Hand Grown and Exotic beans are a curated variety
							of beans, whereas Seasonal and Regular are more of a bountiful
							harvest.
						</Typography>
						<Box
							className={styles["container-2__link"]}
							display="flex"
							alignItems="center"
							justifyContent="flex-end"
							marginTop="1.1rem"
						>
							<Typography
								className={styles["container-2__link-text"]}
								textAlign="right"
								component="a"
								href="/gallery"
								fontSize="1.16rem"
							>
								View all the beans in the gallery
							</Typography>
							<ArrowRight className={styles["container-2__link-icon"]} />
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}