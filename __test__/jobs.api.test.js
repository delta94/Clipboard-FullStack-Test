import { createMocks } from "node-mocks-http";
import jobs from "../pages/api/jobs";
import { getTotalJobCounts } from "../src/utils/helper";

describe("JOBS API TEST - endpoint: /api/jobs", () => {
  /**--------- call jobs api without param (like when the page is loaded first time or refresh.) ----------*/

  it("should return 120 jobs", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: { filters: "", search: "", sort: "" },
    });

    await jobs(req, res);
    let totalJobs = getTotalJobCounts(JSON.parse(res._getData()));

    expect(res._getStatusCode()).toBe(200);
    expect(totalJobs).toBe(120);
  });

  /**--------- call jobs api with param (when Per-Diem jobs are filtered) ----------*/

  it("should return 22 jobs", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: { filters: '{"job_type":["Per-Diem"]}', search: "", sort: "" },
    });

    await jobs(req, res);
    let totalJobs = getTotalJobCounts(JSON.parse(res._getData()));

    expect(res._getStatusCode()).toBe(200);
    expect(totalJobs).toBe(22);
  });

  /**--------- call jobs api with param (when Per-Diem && Full-time jobs are filtered) ----------*/

  it("should return 55 jobs", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filters: '{"job_type":["Per-Diem","Full-time"]}',
        search: "",
        sort: "",
      },
    });

    await jobs(req, res);
    let totalJobs = getTotalJobCounts(JSON.parse(res._getData()));

    expect(res._getStatusCode()).toBe(200);
    expect(totalJobs).toBe(55);
  });

  /**--------- call jobs api with param (when Per-Diem && Full-time for JOB TYPE
   * && Anesthesiology & Perioperative Medicine filter option for DEPARTMENT && Night shift for WORK SCHEDULE are filtered) ----------*/

  it("should return 11 jobs", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filters:
          '{"job_type":["Per-Diem","Full-time"],"department":["Anesthesiology & Perioperative Medicine"],"work_schedule":["Night shift"]}',
        search: "",
        sort: "",
      },
    });

    await jobs(req, res);
    let totalJobs = getTotalJobCounts(JSON.parse(res._getData()));

    expect(res._getStatusCode()).toBe(200);
    expect(totalJobs).toBe(11);
  });

  /**--------- call jobs api with param (when user is going to search jobs related to mammoth) ----------*/

  it("should return 8 jobs", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: { filters: "", search: "mammoth", sort: "" },
    });

    await jobs(req, res);
    let totalJobs = getTotalJobCounts(JSON.parse(res._getData()));

    expect(res._getStatusCode()).toBe(200);
    expect(totalJobs).toBe(8);
  });

  /**--------- call jobs api with param (when user is going to search mammoth && filter Full time jobs) ----------*/

  it("should return 3 jobs", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filters: '{"job_type":["Full-time"]}',
        search: "mammoth",
        sort: "",
      },
    });

    await jobs(req, res);
    let totalJobs = getTotalJobCounts(JSON.parse(res._getData()));

    expect(res._getStatusCode()).toBe(200);
    expect(totalJobs).toBe(3);
  });

  /**--------- call jobs api with param (when user is going to search mammoth && filter Full time && Night shift) ----------*/

  it("should return no jobs", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filters: '{"job_type":["Full-time"],"work_schedule":["Night shift"]}',
        search: "mammoth",
        sort: "",
      },
    });

    await jobs(req, res);
    let totalJobs = getTotalJobCounts(JSON.parse(res._getData()));

    expect(res._getStatusCode()).toBe(200);
    expect(totalJobs).toBe(0);
  });

  /**--------- call jobs api with param (when user is going to search nurse && filter Full time
   * && Night shift && Intermediate && multiple sort - Location: desc, Experience: asc, Department: desc, Education: asc, Role: asc) ----------*/

  it("should return 10 jobs, the title of the first job should be Urology Nurse Practitioner in Indiana University Health Transplant by multiple sort", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filters:
          '{"job_type":["Full-time"],"work_schedule":["Night shift"],"experience":["Intermediate"]}',
        search: "nurse",
        sort:
          '{"Location":"desc","Experience":"asc","Department":"desc","Education":"asc","Role":"asc"}',
      },
    });

    await jobs(req, res);
    let totalJobs = getTotalJobCounts(JSON.parse(res._getData()));

    expect(res._getStatusCode()).toBe(200);
    expect(totalJobs).toBe(10);
    expect(JSON.parse(res._getData())[0].items[0].job_title).toEqual(
      "Urology Nurse Practitioner"
    );
  });
});
