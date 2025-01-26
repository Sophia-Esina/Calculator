const snowContainer = document.getElementById('snow-container');
const digits = '0123456789';

export function createSnowflake() {
	const snowflake = document.createElement('div');
	const size = Math.random() * 16 + 10;

	const leftPosition = Math.random() * window.innerWidth;
	const duration = Math.random() * 3 + 2;
	snowflake.textContent = digits.charAt(Math.floor(Math.random() * digits.length));
	snowflake.className = 'snowflake';
	snowflake.style.fontSize = `${size}px`;
	snowflake.style.left = `${leftPosition}px`;
	snowflake.style.animationDuration = `${duration}s`;
	snowflake.style.animationDelay = `${Math.random() * 5}s`;
	snowContainer.appendChild(snowflake);

	setTimeout(
		() => {
			snowflake.remove();
		},
		(duration + 1) * 1000,
	);
}
