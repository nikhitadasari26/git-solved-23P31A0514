/**
 * System Monitoring Script
 * Supports both Production and Development modes
 * Combines stability (prod) + debug insights (dev)
 */

const isDev = process.env.NODE_ENV !== 'production';

const monitorConfig = {
  interval: isDev ? 5000 : 60000, // 5s in dev, 1min in prod
  alertThreshold: isDev ? 90 : 80,
  metricsEndpoint: isDev ? 'http://localhost:3000/metrics' : 'http://localhost:8080/metrics',
  debugMode: isDev,
  verboseLogging: isDev
};

console.log('=================================');
console.log(`DevOps Simulator - Monitor ${isDev ? 'v2.0-beta (DEV)' : 'v1.0 (PROD)'}`);
if (isDev) console.log('Development Mode: ENABLED');
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  if (monitorConfig.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Generate mock values (in dev) or show static checks (in prod)
  const cpuUsage = isDev ? Math.random() * 100 : 45; // Simulated CPU in dev
  const memUsage = isDev ? Math.random() * 100 : 55;
  const diskUsage = isDev ? Math.random() * 100 : 60;

  console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
  console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
  console.log(`✓ Disk space: ${diskUsage.toFixed(2)}% used`);

  if (isDev && monitorConfig.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    console.log('✓ Source maps: Enabled');
  }

  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log('⚠️  System Status: WARNING - High resource usage');
  } else {
    console.log('✅ System Status: HEALTHY');
  }

  if (monitorConfig.verboseLogging) {
    console.log(`Next check in ${monitorConfig.interval}ms`);
  }
}

console.log(`Monitoring every ${monitorConfig.interval}ms`);
if (isDev) console.log('Debug features enabled');

// Start monitoring loop
setInterval(checkSystemHealth, monitorConfig.interval);
checkSystemHealth();

// Development-only: Log memory usage details every 30s
if (isDev && monitorConfig.debugMode) {
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log('\n--- Memory Usage ---');
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}
