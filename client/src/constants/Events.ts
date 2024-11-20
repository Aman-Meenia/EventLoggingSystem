export const eventTypesArray: string[] = [
  "SYSTEM_START",
  "SYSTEM_SHUTDOWN",
  "SERVICE_HEALTH_CHECK",
  "RESOURCE_THRESHOLD_EXCEEDED",
  "SYSTEM_UPDATE",
  "SYSTEM_RESOURCE_ALLOCATION",
  "SYSTEM_RESTART",
  "FAILOVER_INITIATED",
];

export const eventsArray = [
  {
    eventType: "SYSTEM_START",
    sourceAppId: "App1",
    timeStamp: "2024-01-12 08:32:01",
    payload: { message: "System started successfully" },
  },
  {
    eventType: "SYSTEM_SHUTDOWN",
    sourceAppId: "App2",
    timeStamp: "2024-02-11 17:45:23",
    payload: { message: "System shut down for maintenance" },
  },
  {
    eventType: "SERVICE_HEALTH_CHECK",
    sourceAppId: "App3",
    timeStamp: "2024-03-10 09:21:15",
    payload: { status: "Healthy", checkedBy: "MonitorService" },
  },
  {
    eventType: "RESOURCE_THRESHOLD_EXCEEDED",
    sourceAppId: "App4",
    timeStamp: "2024-10-09 22:18:30",
    payload: { resource: "CPU", usage: "95%" },
  },
  {
    eventType: "SYSTEM_UPDATE",
    sourceAppId: "App5",
    timeStamp: "2024-11-08 15:35:42",
    payload: { version: "v2.1.3", details: "Security patches applied" },
  },
  {
    eventType: "SYSTEM_RESOURCE_ALLOCATION",
    sourceAppId: "App6",
    timeStamp: "2024-11-07 13:28:55",
    payload: { resource: "Memory", allocated: "2GB" },
  },
  {
    eventType: "SYSTEM_RESTART",
    sourceAppId: "App7",
    timeStamp: "2024-11-06 20:47:11",
    payload: { reason: "Scheduled maintenance" },
  },
  {
    eventType: "FAILOVER_INITIATED",
    sourceAppId: "App8",
    timeStamp: "2024-10-05 10:59:47",
    payload: { message: "Failover process started" },
  },
  {
    eventType: "SYSTEM_START",
    sourceAppId: "App9",
    timeStamp: "2024-11-04 14:12:33",
    payload: { message: "System started after update" },
  },
  {
    eventType: "SYSTEM_SHUTDOWN",
    sourceAppId: "App10",
    timeStamp: "2024-08-03 07:56:20",
    payload: { message: "System shutdown due to power issues" },
  },
  {
    eventType: "SERVICE_HEALTH_CHECK",
    sourceAppId: "App11",
    timeStamp: "2024-11-02 16:40:05",
    payload: { status: "Unhealthy", checkedBy: "MonitorService" },
  },
  {
    eventType: "RESOURCE_THRESHOLD_EXCEEDED",
    sourceAppId: "App12",
    timeStamp: "2024-11-01 11:24:44",
    payload: { resource: "Disk", usage: "90%" },
  },
  {
    eventType: "SYSTEM_UPDATE",
    sourceAppId: "App13",
    timeStamp: "2024-01-30 21:53:01",
    payload: { version: "v2.1.4", details: "Minor bug fixes" },
  },
  {
    eventType: "SYSTEM_RESOURCE_ALLOCATION",
    sourceAppId: "App14",
    timeStamp: "2024-05-29 12:15:18",
    payload: { resource: "CPU", allocated: "1.5GHz" },
  },
  {
    eventType: "SYSTEM_RESTART",
    sourceAppId: "App15",
    timeStamp: "2024-01-28 19:08:02",
    payload: { reason: "Unexpected shutdown recovery" },
  },
  {
    eventType: "FAILOVER_INITIATED",
    sourceAppId: "App16",
    timeStamp: "2024-01-27 09:43:16",
    payload: { message: "Secondary system activated" },
  },
  {
    eventType: "SYSTEM_START",
    sourceAppId: "App17",
    timeStamp: "2024-01-26 05:34:45",
    payload: { message: "System started successfully" },
  },
  {
    eventType: "SYSTEM_SHUTDOWN",
    sourceAppId: "App18",
    timeStamp: "2024-07-25 18:12:29",
    payload: { message: "System shutdown initiated by admin" },
  },
  {
    eventType: "SERVICE_HEALTH_CHECK",
    sourceAppId: "App19",
    timeStamp: "2024-09-24 14:48:30",
    payload: { status: "Healthy", checkedBy: "HealthService" },
  },
  {
    eventType: "RESOURCE_THRESHOLD_EXCEEDED",
    sourceAppId: "App20",
    timeStamp: "2024-09-23 22:02:55",
    payload: { resource: "Memory", usage: "85%" },
  },
];
