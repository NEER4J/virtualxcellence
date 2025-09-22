export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <img src="/assets/imgs/logo/ico.png"  alt="Virtual Xcellence" style={{ width: '80px', height: '80px' }} />
        <div className="loading-bar-container">
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

