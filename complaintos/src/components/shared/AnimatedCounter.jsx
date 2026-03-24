import CountUp from "react-countup";

export function AnimatedCounter({ target, duration = 2, delay = 0, suffix = "", prefix = "", decimals = 0, className = "", style = {} }) {
  return (
    <div className={className} style={style}>
      <CountUp
        end={target}
        duration={duration}
        delay={delay}
        decimals={decimals}
        suffix={suffix}
        prefix={prefix}
      />
    </div>
  );
}
